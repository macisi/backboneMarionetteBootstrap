/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "baseLayout",
    "app/business.detail/view/detailView",
    "app/business.detail/collection/details"
], function (BaseLayout, DetailView, Details) {
    "use strict";

    var Layout = BaseLayout.extend({
        name: "businessDetail",

        regions: {
            detailRegion: "#J-detail-list"
        },

        onShow: function(){
            this.detailRegion.show(new DetailView({
                collection: new Details()
            }));
        }

    });

    return Layout;
});