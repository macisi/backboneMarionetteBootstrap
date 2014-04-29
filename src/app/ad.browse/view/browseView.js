/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["marionette", "templates", "app/componment/listView"], function (Marionette, tpl, ListView) {
    "use strict";

    var BrowseItem = Marionette.ItemView.extend({
        tagName: "tr",
        template: tpl["ad_browse_tr"]
    });

    var BrowseView = ListView.extend({
        itemView: BrowseItem,
        itemViewContainer: "tbody",
        template: tpl["ad_browse_table"]
    });

    return BrowseView;
});