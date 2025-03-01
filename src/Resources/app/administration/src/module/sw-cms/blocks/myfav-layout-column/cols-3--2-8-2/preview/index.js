import template from './index.html.twig';
import './index.scss';

Shopware.Component.register('sw-cms-preview-myfav-layout-column-2--8-4', {
    template,

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    }
});