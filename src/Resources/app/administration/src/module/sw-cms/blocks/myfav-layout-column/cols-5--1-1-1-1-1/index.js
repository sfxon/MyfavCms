import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'myfav-layout-column-5--1-1-1-1-1',
    category: 'myfav-layout-column',
    label: '5 Spalten (Flex: 1, 1, 1, 1, 1)',
    component: 'sw-cms-block-myfav-layout-column-5--1-1-1-1-1',
    previewComponent: 'sw-cms-preview-myfav-layout-column-5--1-1-1-1-1',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        myfavSlot1: 'myfav-listing-product',
        myfavSlot2: 'myfav-listing-product',
        myfavSlot3: 'myfav-listing-product',
        myfavSlot4: 'myfav-listing-product',
        myfavSlot5: 'myfav-listing-product',
    }
});