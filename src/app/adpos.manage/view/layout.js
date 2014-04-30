/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "baseLayout",
    "app/adpos.manage/view/posView",
    "app/adpos.manage/collection/poses"
], function (BaseLayout, PosView, Poses) {
    "use strict";

    var Layout = BaseLayout.extend({
        name: "adposManage",

        regions: {
            listRegion: "#J-adpos-list"
        },

        onShow: function(){
            this.listRegion.show(new PosView({
                collection: new Poses()
            }));
        }

    });

    return Layout;
});