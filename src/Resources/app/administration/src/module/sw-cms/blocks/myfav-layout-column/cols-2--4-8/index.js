import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'myfav-layout-column-2--4-8',
    category: 'myfav-layout-column',
    label: 'Spalte 2 (4md x 8md)',
    component: 'sw-cms-block-myfav-layout-column-2--4-8',
    previewComponent: 'sw-cms-preview-myfav-layout-column-2--4-8',
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