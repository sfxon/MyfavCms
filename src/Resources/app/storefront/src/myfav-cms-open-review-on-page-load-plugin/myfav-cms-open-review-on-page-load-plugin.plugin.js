import Plugin from 'src/plugin-system/plugin.class';

export default class MyfavCmsOpenReviewOnPageLoadPlugin extends Plugin {
    init() {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has("myfavOpenRating")) {
            let tabElement = document.querySelector('.product-detail-tab-navigation-link.review-tab');
            tabElement.click();
            tabElement.scrollIntoView({ behavior: "smooth" });
        }
    }
}