/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "marionette",
    "templates",
    "app/ad.manage/view/adView",
    "app/ad.manage/collection/ads"
], function (Marionette, tpl, AdView, Ads) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["ad_manage_layout"],

        regions: {
            listRegion: "#J-list"
        },

        onShow: function(){
            this.listRegion.show(new AdView({
                collection: new Ads()
            }));
        }

    });

    return Layout;
});