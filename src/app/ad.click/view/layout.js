/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "marionette",
    "templates",
    "app/ad.click/view/clickView",
    "app/ad.click/collection/clicks"
], function (Marionette, tpl, ClickView, Clicks) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["ad_click_layout"],

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