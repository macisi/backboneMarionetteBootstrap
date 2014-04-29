/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["marionette", "templates", "app/componment/listView"], function (Marionette, tpl, ListView) {
    "use strict";

    var LogItem = Marionette.ItemView.extend({
        tagName: "tr",
        template: tpl["ad_log_tr"]
    });

    var LogView = ListView.extend({
        itemView: LogItem,
        itemViewContainer: "tbody",
        template: tpl["ad_log_table"]
    });

    return LogView;
});