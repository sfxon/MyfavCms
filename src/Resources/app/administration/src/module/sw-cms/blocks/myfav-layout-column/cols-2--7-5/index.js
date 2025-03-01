import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'myfav-layout-column-2--7-5',
    category: 'myfav-layout-column',
    label: 'Spalte 2 (7md x 5md)',
    component: 'sw-cms-block-myfav-layout-column-2--7-5',
    previewComponent: 'sw-cms-preview-myfav-layout-column-2--7-5',
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
    }
});