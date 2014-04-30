/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "baseLayout",
    "app/ad.manage/view/adView",
    "app/ad.manage/collection/ads"
], function (BaseLayout, AdView, Ads) {
    "use strict";

    var Layout = BaseLayout.extend({
        name: "adManage",

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