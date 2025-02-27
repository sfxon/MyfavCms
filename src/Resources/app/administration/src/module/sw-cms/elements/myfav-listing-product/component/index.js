import template from './index.html.twig';
import './index.scss';

Shopware.Component.register('sw-cms-el-myfav-listing-product', {
    template,

    mixins: [
        'cms-element'
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('myfav-listing-product');

            console.log('here comes the element', this);
        }
    }
});
