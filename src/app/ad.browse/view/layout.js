/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "marionette",
    "templates",
    "app/ad.browse/view/browseView",
    "app/ad.browse/collection/browses"
], function (Marionette, tpl, BrowseView, Browses) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["ad_browse_layout"],

        regions: {
            browseDetail: "#J-browse-detail"
        },

        onShow: function(){
            this.browseDetail.show(new BrowseView({
                collection: new Browses()
            }));
        }

    });

    return Layout;
});