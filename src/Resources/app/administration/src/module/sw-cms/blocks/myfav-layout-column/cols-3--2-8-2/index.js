import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'myfav-layout-column-3--2-8-2',
    category: 'myfav-layout-column',
    label: 'Spalte 3 (2md x 8md x 2md)',
    component: 'sw-cms-block-myfav-layout-column-3--2-8-2',
    previewComponent: 'sw-cms-preview-myfav-layout-column-3--2-8-2',
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
    }
});