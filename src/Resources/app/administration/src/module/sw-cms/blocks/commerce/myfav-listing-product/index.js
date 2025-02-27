import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'myfav-listing-product',
    category: 'commerce',
    label: 'Myfav Listing Product',
    component: 'sw-cms-block-myfav-listing-product',
    previewComponent: 'sw-cms-preview-myfav-listing-product',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        mvproduct: 'myfav-listing-product',
    }
});