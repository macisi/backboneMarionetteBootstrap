/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "baseLayout",
    "app/adsense.manage/view/adsenseView",
    "app/adsense.manage/collection/adsenseLists"
], function (BaseLayout, AdsenseView, AdsenseLists) {
    "use strict";

    var Layout = BaseLayout.extend({

        name: "adsenseManage",

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