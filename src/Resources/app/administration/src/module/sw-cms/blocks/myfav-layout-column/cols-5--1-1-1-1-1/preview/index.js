import template from './index.html.twig';
import './index.scss';

Shopware.Component.register('sw-cms-preview-myfav-layout-column-5--1-1-1-1-1', {
    template,

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    }
});