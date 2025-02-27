<?php declare(strict_types=1);

namespace Myfav\Cms\DataResolver;

use Myfav\Cms\Struct\MyfavListingProductStruct;
use Shopware\Core\Content\Cms\Aggregate\CmsSlot\CmsSlotEntity;
use Shopware\Core\Content\Cms\DataResolver\CriteriaCollection;
use Shopware\Core\Content\Cms\DataResolver\Element\ElementDataCollection;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\EntityResolverContext;
use Shopware\Core\Content\Cms\DataResolver\ResolverContext\ResolverContext;
use Shopware\Core\Content\Product\ProductDefinition;
use Shopware\Core\Content\Product\SalesChannel\Detail\ProductConfiguratorLoader;
use Shopware\Core\Content\Product\SalesChannel\SalesChannelProductEntity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepository;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Aggregation\Metric\CountAggregation;
use Shopware\Core\Framework\DataAbstractionLayer\Search\AggregationResult\Metric\CountResult;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\EqualsFilter;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Filter\MultiFilter;
use Shopware\Core\System\SalesChannel\SalesChannelContext;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Shopware\Core\Content\Product\Cms\AbstractProductDetailCmsElementResolver;

class MyfavListingProductCmsElementResolver extends AbstractProductDetailCmsElementResolver
{
    public function __construct(
        private readonly ProductConfiguratorLoader $configuratorLoader,
        private readonly EntityRepository $repository,
        private readonly SystemConfigService $systemConfigService,)
    {
    }

    public function getType(): string
    {
        return 'myfav-listing-product';
    }

    public function collect(CmsSlotEntity $slot, ResolverContext $resolverContext): ?CriteriaCollection
    {
        /* get the config from the element */
        $productConfig = $slot->getFieldConfig()->get('product');

        if ($productConfig === null || $productConfig->isMapped() || $productConfig->getValue() === null) {
            return null;
        }

        $criteria = new Criteria([$productConfig->getStringValue()]);
        $criteria->addAssociation('deliveryTime');
        $criteria->addAssociation('manufacturer');
        $criteria->addAssociation('media');
        $criteria->addAssociation('productReviews');

        $criteriaCollection = new CriteriaCollection();
        $criteriaCollection->add('product_' . $slot->getUniqueIdentifier(), ProductDefinition::class, $criteria);

        return $criteriaCollection;
    }

    /**
     * enrich
     *
     * @param  mixed $slot
     * @param  mixed $resolverContext
     * @param  mixed $result
     * @return void
     */
    public function enrich(CmsSlotEntity $slot, ResolverContext $resolverContext, ElementDataCollection $result): void
    {
        $myfavListingProductStruct = new MyfavListingProductStruct();
        $slot->setData($myfavListingProductStruct);

        $productConfig = $slot->getFieldConfig()->get('product');
        if ($productConfig === null || $productConfig->getValue() === null) {
            return;
        }

        if ($resolverContext instanceof EntityResolverContext && $productConfig->isMapped()) {
            /** @var SalesChannelProductEntity $product */
            $product = $this->resolveEntityValue($resolverContext->getEntity(), $productConfig->getStringValue());

            $myfavListingProductStruct->setProduct($product);
            $myfavListingProductStruct->setProductId($product->getId());
            $myfavListingProductStruct->setSliderConfig($this->getSliderConfig());
            $myfavListingProductStruct->setTotalReviews($this->getReviewsCount($product, $resolverContext->getSalesChannelContext()));
            $myfavListingProductStruct->setConfiguratorSettings($this->configuratorLoader->load($product, $resolverContext->getSalesChannelContext()));
        }

        if ($productConfig->isStatic()) {
            $this->resolveProductFromRemote($slot, $myfavListingProductStruct, $result, $productConfig->getStringValue(), $resolverContext->getSalesChannelContext(), $resolverContext);
        }
    }

    /**
     * resolveProductFromRemote
     *
     * @return void
     */
    private function resolveProductFromRemote(
        CmsSlotEntity $slot,
        MyfavListingProductStruct $myfavListingProductStruct,
        ElementDataCollection $result,
        string $productId,
        SalesChannelContext $salesChannelContext,
        $resolverContext
    ): void {
        $product = $result->get('product_' . $slot->getUniqueIdentifier())?->get($productId);

        if (!$product instanceof SalesChannelProductEntity) {
            return;
        }

        if ($product->getIsCloseout()
            && $product->getStock() <= 0
            && $this->systemConfigService->getBool('core.listing.hideCloseoutProductsWhenOutOfStock', $salesChannelContext->getSalesChannelId())
        ) {
            return;
        }

        $myfavListingProductStruct->setProduct($product);
        $myfavListingProductStruct->setProductId($product->getId());
        $myfavListingProductStruct->setSliderConfig($this->getSliderConfig());
        $myfavListingProductStruct->setSliderElement([
            'fieldConfig' => [
                'elements' => $this->getSliderConfig(),
            ],
            'type' => 'image-gallery',
            'data' => [
                'sliderItems' => $product->getMedia()->getElements()
            ]
        ]);
        $myfavListingProductStruct->setTotalReviews($this->getReviewsCount($product, $resolverContext->getSalesChannelContext()));
        $myfavListingProductStruct->setConfiguratorSettings($this->configuratorLoader->load($product, $resolverContext->getSalesChannelContext()));
    }

    /**
     * getSliderConfig
     *
     * @return array
     */
    private function getSliderConfig(): array
    {
        $data = [
            'zoom' => [ 'value' => false ],
            'gutter' => [ 'value' => 0 ],
            'keepAspectRatioOnZoom' => [ 'value' => null ],
            'magnifierOverGallery' => [ 'value' => [] ],
            'zoomModal' => [ 'value' => false ],
            'minHeight' => [ 'value' => '430px' ],
            'displayMode' => [ 'value' => 'contain' ],
            'navigationArrows' => [ 'value' => 'inside' ],
            'navigationDots' => [ 'value' => 'inside' ],
            'galleryPosition' => [ 'value' => 'left' ],
            'verticalAlign' => [ 'value' => 'null' ],
            'zoomImageContainerSelector' => [ 'value' => null ]
        ];

        return $data;
    }

    /**
     * getReviewsCount
     *
     * @param  SalesChannelProductEntity $product
     * @param  SalesChannelContext $context
     * @return int
     */
    private function getReviewsCount(SalesChannelProductEntity $product, SalesChannelContext $context): int
    {
        $reviewCriteria = $this->createReviewCriteria($context, $product->getParentId() ?? $product->getId());

        $aggregation = $this->repository->aggregate($reviewCriteria, $context->getContext())->get('review-count');

        return $aggregation instanceof CountResult ? $aggregation->getCount() : 0;
    }

    /**
     * createReviewCriteria
     *
     * @param  SalesChannelContext $context
     * @param  string $productId
     * @return Criteria
     */
    private function createReviewCriteria(SalesChannelContext $context, string $productId): Criteria
    {
        $reviewFilters = [];
        $criteria = new Criteria();

        $reviewFilters[] = new EqualsFilter('status', true);
        if ($context->getCustomer()) {
            $reviewFilters[] = new EqualsFilter('customerId', $context->getCustomerId());
        }

        $criteria->addFilter(
            new MultiFilter(MultiFilter::CONNECTION_AND, [
                new MultiFilter(MultiFilter::CONNECTION_OR, $reviewFilters),
                new MultiFilter(MultiFilter::CONNECTION_OR, [
                    new EqualsFilter('product.id', $productId),
                    new EqualsFilter('product.parentId', $productId),
                ]),
            ])
        );

        $criteria->addAggregation(new CountAggregation('review-count', 'id'));

        return $criteria;
    }
}
