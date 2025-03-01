import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'myfav-layout-column-4--3-3-3-3',
    category: 'myfav-layout-column',
    label: 'Spalte 2 (3md x 3md x 3md x 3md)',
    component: 'sw-cms-block-myfav-layout-column-4--3-3-3-3',
    previewComponent: 'sw-cms-preview-myfav-layout-column-4--3-3-3-3',
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
    }
});