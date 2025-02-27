<?php declare(strict_types=1);

namespace Myfav\Cms\Struct;

use Shopware\Core\Content\Product\SalesChannel\SalesChannelProductEntity;
use Shopware\Core\Framework\Log\Package;
use Shopware\Core\Framework\Struct\Struct;

class MyfavListingProductStruct extends Struct
{
    protected $configuratorSettings = null;
    protected $product;
    protected $productId;
    protected array $sliderConfig = [];
    protected $sliderElement = [];
    protected $totalReviews = 0;

    // apiAlias
    public function getApiAlias(): string
    {
        return 'cms_myfav_listing_product';
    }

    // configuratorSettings
    public function getConfiguratorSettings(): mixed
    {
        return $this->configuratorSettings;
    }

    public function setConfiguratorSettings($configuratorSettings): void
    {
        $this->configuratorSettings = $configuratorSettings;
    }

    // product
    public function getProduct(): ?SalesChannelProductEntity
    {
        return $this->product;
    }

    public function setProduct(SalesChannelProductEntity $product): void
    {
        $this->product = $product;
    }

    // productId
    public function getProductId(): ?string
    {
        return $this->productId;
    }

    public function setProductId(string $productId): void
    {
        $this->productId = $productId;
    }

    // sliderConfig
    public function getSliderConfig(): ?array
    {
        return $this->sliderConfig;
    }

    public function setSliderConfig(array $sliderConfig): void
    {
        $this->sliderConfig = $sliderConfig;
    }

    // sliderElement
    public function getSliderElement(): ?array
    {
        return $this->sliderElement;
    }

    public function setSliderElement(array $sliderElement): void
    {
        $this->sliderElement = $sliderElement;
    }

    // totalReviews
    public function getTotalReviews(): mixed
    {
        return $this->totalReviews;
    }

    public function setTotalReviews($totalReviews): void
    {
        $this->totalReviews = $totalReviews;
    }
}
