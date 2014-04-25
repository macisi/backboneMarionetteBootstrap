/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "marionette",
    "templates",
    "app/adsense.manage/view/adsenseListView",
    "app/adsense.manage/collection/adsenseLists"
], function (Marionette, tpl, AdsenseTableView, AdsenseLists) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["adsense_manage_layout"],

        regions: {
            adsenseList: "#J-adsense-list"
        },

        onShow: function(){
            this.adsenseList.show(new AdsenseTableView({
                collection: new AdsenseLists()
            }));
        }

    });

    return Layout;
});