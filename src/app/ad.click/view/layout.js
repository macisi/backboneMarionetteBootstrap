/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "baseLayout",
    "app/ad.click/view/clickView",
    "app/ad.click/collection/clicks"
], function (BaseLayout, ClickView, Clicks) {
    "use strict";

    var Layout = BaseLayout.extend({
        name: "adClick",

        regions: {
            clickDetail: "#J-click-detail"
        },

        onShow: function(){
            this.clickDetail.show(new ClickView({
                collection: new Clicks()
            }));
        }

    });

    return Layout;
});