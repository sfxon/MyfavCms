import template from './index.html.twig';
import './index.scss';

Shopware.Component.register('sw-cms-preview-myfav-layout-column-2--4-8', {
    template,

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    }
});