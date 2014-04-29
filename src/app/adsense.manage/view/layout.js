/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "marionette",
    "templates",
    "app/adsense.manage/view/adsenseView",
    "app/adsense.manage/collection/adsenseLists"
], function (Marionette, tpl, AdsenseView, AdsenseLists) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["adsense_manage_layout"],

        regions: {
            adsenseList: "#J-adsense-list"
        },

        onShow: function(){
            this.adsenseList.show(new AdsenseView({
                collection: new AdsenseLists()
            }));
        }

    });

    return Layout;
});