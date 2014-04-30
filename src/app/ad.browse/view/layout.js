/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "baseLayout",
    "app/ad.browse/view/browseView",
    "app/ad.browse/collection/browses"
], function (BaseLayout, BrowseView, Browses) {
    "use strict";

    var Layout = BaseLayout.extend({
        name: "adBrowse",

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