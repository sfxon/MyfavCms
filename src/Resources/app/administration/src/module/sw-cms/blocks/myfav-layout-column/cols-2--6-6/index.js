import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'myfav-layout-column-2--6-6',
    category: 'myfav-layout-column',
    label: 'Spalte 2 (6md x 6md)',
    component: 'sw-cms-block-myfav-layout-column-2--6-6',
    previewComponent: 'sw-cms-preview-myfav-layout-column-2--6-6',
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