import MyfavCmsOpenReviewOnPageLoadPlugin from './myfav-cms-open-review-on-page-load-plugin/myfav-cms-open-review-on-page-load-plugin.plugin';

// Register your plugin via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('MyfavCmsOpenReviewOnPageLoadPlugin', MyfavCmsOpenReviewOnPageLoadPlugin, '.product-detail-tab-navigation-link.review-tab');