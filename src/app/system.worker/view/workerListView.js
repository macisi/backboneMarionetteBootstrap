/**
 * Created by biangang on 2014/4/17.
 */
define([
    "marionette",
    "templates",
    "dialog"
], function(Marionette, tpl, dialog){
    "use strict";

    var WorkerListView = Marionette.ItemView.extend({
        template: tpl["system_worker_list"],
        tagName: "tr",
        events: {
            "click .J-del": "del"
        },
        del: function(e){
            e.preventDefault();
            var d = dialog({
                content: "<i class=\"icon-warn\"></i>确定删除该工作人员？",
                okValue: '确定',
                skin: 'ui-confirm',
                ok: function () {
                    //todo: request
                    return false;
                },
                cancelValue: '取消',
                cancel: function (){}
            });
            d.showModal();
        }
    });

    var WorkerTableView = Marionette.CompositeView.extend({
        itemView: WorkerListView,

        itemViewContainer: "tbody",

        template: tpl["system_worker_table"]
    });

    return WorkerTableView;

});