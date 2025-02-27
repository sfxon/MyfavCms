const Application = Shopware.Application;

import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'myfav-listing-product',
    label: 'Myfav Listing Product',
    component: 'sw-cms-el-myfav-listing-product',
    configComponent: 'sw-cms-el-config-myfav-listing-product',
    previewComponent: 'sw-cms-el-preview-myfav-listing-product',
    defaultConfig: {
        product: {
            source: 'static',
            value: null,
            required: true,
            entity: {
                name: 'product',
                criteria: new Shopware.Data.Criteria(1, 25).addAssociation('cover'),
            },
        },
        boxLayout: {
            source: 'static',
            value: 'standard',
        },
        displayMode: {
            source: 'static',
            value: 'standard',
        },
        verticalAlign: {
            source: 'static',
            value: null,
        },
    },
    defaultData: {
        boxLayout: 'standard',
        product: null,
    },
    collect: Shopware.Service('cmsService').getCollectFunction(),
});