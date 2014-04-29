/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "marionette",
    "templates",
    "app/adpos.manage/view/posView",
    "app/adpos.manage/collection/poses"
], function (Marionette, tpl, PosView, Poses) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["adpos_manage_layout"],

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