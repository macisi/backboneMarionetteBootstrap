/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "templates",
    "app/adsense.manage/view/adsenseListView",
    "app/adsense.manage/collection/adsenseLists"
], function (tpl, AdsenseTableView, AdsenseLists) {
    "use strict";

    var Layout = Backbone.Marionette.Layout.extend({

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