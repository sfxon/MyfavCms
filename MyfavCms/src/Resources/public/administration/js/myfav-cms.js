(function(){var e={939:function(){},596:function(){},47:function(){},958:function(){},59:function(){},75:function(e,t,n){var r=n(939);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("9ecb4fea",r,!0,{})},352:function(e,t,n){var r=n(596);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("5d13eba0",r,!0,{})},234:function(e,t,n){var r=n(47);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("1c0a23c2",r,!0,{})},161:function(e,t,n){var r=n(958);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("a2a29150",r,!0,{})},306:function(e,t,n){var r=n(59);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(346).Z("ffea1298",r,!0,{})},346:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],l=i[0],s={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[l]?r[l].parts.push(s):n.push(r[l]={id:l,parts:[s]})}return n}n.d(t,{Z:function(){return f}});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},l=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,a=0,c=!1,d=function(){},p=null,m="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,o){c=n,p=o||{};var l=r(e,t);return v(l),function(t){for(var n=[],o=0;o<l.length;o++){var s=i[l[o].id];s.refs--,n.push(s)}t?v(l=r(e,t)):l=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete i[s.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(_(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var l=[],o=0;o<n.parts.length;o++)l.push(_(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:l}}}}function g(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function _(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(c)return d;r.parentNode.removeChild(r)}if(u){var o=a++;t=y.bind(null,r=s||(s=g()),o,!1),n=y.bind(null,r,o,!0)}else t=h.bind(null,r=g()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function h(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),p.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="bundles/myfavcms/",window?.__sw__?.assetPath&&(n.p=window.__sw__.assetPath+"/bundles/myfavcms/"),function(){"use strict";n(75),Shopware.Component.register("sw-cms-block-myfav-listing-product",{template:'{% block sw_cms_block_myfav_listing_product %}\r\n    <div class="sw-cms-block-myfav-listing-product">\r\n        <slot name="mvproduct">{% block sw_cms_block_myfav_listing_product_slot_mvproduct %}{% endblock %}</slot>\r\n    </div>\r\n{% endblock %}'}),n(352),Shopware.Component.register("sw-cms-preview-myfav-listing-product",{template:'{% block sw_cms_block_myfav_listing_product %}\r\n    <div class="sw-cms-preview-myfav-listing-product">\r\n        <div>\r\n            <h2>Myfav Listing Product</h2>\r\n            <p>Detaillierte Artikelkarten im Artikel-Listing und auf Content-Seiten.</p>\r\n        </div>\r\n    </div>\r\n{% endblock %}',computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}}),Shopware.Service("cmsService").registerCmsBlock({name:"myfav-listing-product",category:"commerce",label:"Myfav Listing Product",component:"sw-cms-block-myfav-listing-product",previewComponent:"sw-cms-preview-myfav-listing-product",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{mvproduct:"myfav-listing-product"}}),n(234),Shopware.Component.register("sw-cms-el-myfav-listing-product",{template:'{% block cms_element_preview_myfav_listing_product %}\r\n    <div class="sw-cms-el-preview-myfav-listing_product myfav-element-preview-container">\r\n        <h1>Myfav Listing Product</h1>\r\n        <p>Hier erscheint das Artikel-Element</p>\r\n    </div>\r\n{% endblock %}',mixins:["cms-element"],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("myfav-listing-product"),console.log("here comes the element",this)}}}),n(161);let{Mixin:e,Filter:t}=Shopware;Shopware.Component.register("sw-cms-el-config-myfav-listing-product",{template:'\r\n{% block sw_cms_element_myfav_listing_product %}\r\n<div class="sw-cms-el-config-myfav-listing-product">\r\n    \r\n    {% block sw_cms_element_myfav_listing_product_config_product_select %}\r\n    <sw-entity-single-select\r\n        ref="cmsProductSelection"\r\n        v-model:value="element.config.product.value"\r\n        :label="$tc(\'sw-cms.elements.productBox.config.label.selection\')"\r\n        :placeholder="$tc(\'sw-cms.elements.productBox.config.placeholder.selection\')"\r\n        entity="product"\r\n        :criteria="productCriteria"\r\n        :context="productSelectContext"\r\n        show-clearable-button\r\n        @update:value="onProductChange"\r\n    >\r\n        <template #selection-label-property="{ item }">\r\n            <sw-product-variant-info\r\n                :variations="item.variation"\r\n            >\r\n                {{ item.translated.name || item.name }}\r\n            </sw-product-variant-info>\r\n        </template>\r\n        <template #result-item="{ item, index }">\r\n            <slot\r\n                name="result-item"\r\n                v-bind="{ item, index }"\r\n            >\r\n                <sw-select-result\r\n                    v-bind="{ item, index }"\r\n                >\r\n                    \r\n                    {% block sw_entity_single_select_base_results_list_result_label %}\r\n                    <span class="sw-select-result__result-item-text">\r\n                        <sw-product-variant-info :variations="item.variation">\r\n                            {{ item.translated.name || item.name }}\r\n                        </sw-product-variant-info>\r\n                    </span>\r\n                    {% endblock %}\r\n                </sw-select-result>\r\n            </slot>\r\n        </template>\r\n    </sw-entity-single-select>\r\n    {% endblock %}\r\n\r\n    \r\n    {% block sw_cms_element_myfav_listing_product_config_layout_select %}\r\n    <sw-select-field\r\n        v-model:value="element.config.boxLayout.value"\r\n        :label="$tc(\'sw-cms.elements.productBox.config.label.layoutType\')"\r\n    >\r\n        \r\n        {% block sw_cms_element_myfav_listing_product_config_layout_select_options %}\r\n        <option value="standard">\r\n            {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeStandard\') }}\r\n        </option>\r\n        <option value="image">\r\n            {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeImage\') }}\r\n        </option>\r\n        <option value="minimal">\r\n            {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeMinimal\') }}\r\n        </option>\r\n        {% endblock %}\r\n    </sw-select-field>\r\n    {% endblock %}\r\n\r\n    \r\n    {% block sw_cms_element_myfav_listing_product_config_displaymode_select %}\r\n    <sw-select-field\r\n        v-model:value="element.config.displayMode.value"\r\n        :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\r\n    >\r\n        \r\n        {% block sw_cms_element_myfav_listing_product_config_displaymode_select_options %}\r\n        <option value="standard">\r\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\r\n        </option>\r\n        <option value="cover">\r\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeCover\') }}\r\n        </option>\r\n        <option value="contain">\r\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeContain\') }}\r\n        </option>\r\n        {% endblock %}\r\n    </sw-select-field>\r\n    {% endblock %}\r\n\r\n    \r\n    {% block sw_cms_element_myfav_listing_product_config_settings_vertical_align %}\r\n    <sw-select-field\r\n        v-model:value="element.config.verticalAlign.value"\r\n        :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\r\n        :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\r\n    >\r\n        \r\n        {% block sw_cms_element_myfav_listing_product_config_settings_vertical_align_options %}\r\n        <option value="flex-start">\r\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\r\n        </option>\r\n        <option value="center">\r\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\r\n        </option>\r\n        <option value="flex-end">\r\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\r\n        </option>\r\n        {% endblock %}\r\n    </sw-select-field>\r\n    {% endblock %}\r\n</div>\r\n{% endblock %}\r\n',inject:["repositoryFactory"],mixins:[e.getByName("cms-element")],data(){return{}},computed:{productRepository(){return this.repositoryFactory.create("product")},productSelectContext(){let e={...Shopware.Context.api};return e.inheritance=!0,e},productCriteria(){let e=new Shopware.Data.Criteria(1,25);return e.addAssociation("options.group"),e}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("myfav-listing-product")},onProductChange(e){if(e){let t=new Shopware.Data.Criteria(1,25);t.addAssociation("cover"),t.addAssociation("options.group"),this.productRepository.get(e,this.productSelectContext,t).then(t=>{this.element.config.product.value=e})}else this.element.config.product.value=null,this.element.data.productId=null,this.element.data.product=null}}}),n(306),Shopware.Component.register("sw-cms-el-preview-myfav-listing-product",{template:'\r\n{% block sw_cms_element_myfav_listing_product_preview %}\r\n<div class="sw-cms-el-preview-myfav-listing-product  myfav-element-preview-container">\r\n    <h1>Here comes the content</h1>\r\n</div>\r\n{% endblock %}\r\n'}),Shopware.Application,Shopware.Service("cmsService").registerCmsElement({name:"myfav-listing-product",label:"Myfav Listing Product",component:"sw-cms-el-myfav-listing-product",configComponent:"sw-cms-el-config-myfav-listing-product",previewComponent:"sw-cms-el-preview-myfav-listing-product",defaultConfig:{product:{source:"static",value:null,required:!0,entity:{name:"product",criteria:new Shopware.Data.Criteria(1,25).addAssociation("cover")}},boxLayout:{source:"static",value:"standard"},displayMode:{source:"static",value:"standard"},verticalAlign:{source:"static",value:null}},defaultData:{boxLayout:"standard",product:null},collect:Shopware.Service("cmsService").getCollectFunction()})}()})();