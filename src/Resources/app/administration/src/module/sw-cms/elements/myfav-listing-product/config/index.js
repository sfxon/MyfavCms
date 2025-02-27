import template from './index.html.twig';
import './index.scss';

const { Mixin, Filter } = Shopware;

Shopware.Component.register('sw-cms-el-config-myfav-listing-product', {
    template,

    inject: ['repositoryFactory'],

    //emits: ['element-update'],

    mixins: [
        Mixin.getByName('cms-element')
    ],

    data() {
        return {
        };
    },

    computed: {
        productRepository() {
            return this.repositoryFactory.create('product');
        },

        productSelectContext() {
            const context = { ...Shopware.Context.api };
            context.inheritance = true;

            return context;
        },

        productCriteria() {
            const criteria = new Shopware.Data.Criteria(1, 25);
            criteria.addAssociation('options.group');

            return criteria;
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('myfav-listing-product');
        },

        onProductChange(productId) {
            if (!productId) {
                this.element.config.product.value = null;
                this.element.data.productId = null;
                this.element.data.product = null;
            } else {
                const criteria = new Shopware.Data.Criteria(1, 25);
                criteria.addAssociation('cover');
                criteria.addAssociation('options.group');

                this.productRepository.get(productId, this.productSelectContext, criteria).then((product) => {
                    this.element.config.product.value = productId;
                });
            }
        },
    },
});