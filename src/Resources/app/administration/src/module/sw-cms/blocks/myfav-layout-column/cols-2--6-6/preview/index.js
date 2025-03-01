import template from './index.html.twig';
import './index.scss';

Shopware.Component.register('sw-cms-preview-myfav-layout-column-2--6-6', {
    template,

    computed: {
        assetFilter() {
            return Shopware.Filter.getByName('asset');
        },
    }
});