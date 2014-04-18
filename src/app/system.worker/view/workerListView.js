/**
 * Created by biangang on 2014/4/17.
 */
define([
    "marionette",
    "templates",
    "app/system.worker/model/workerList"
], function(Marionette, tpl){
    "use strict";

    var WorkerListView = Marionette.ItemView.extend({
        template: tpl["system_worker_list"],
        tagName: "tr"
    });

    var WorkerTableView = Marionette.CompositeView.extend({
        itemView: WorkerListView,

        itemViewContainer: "tbody",

        template: tpl["system_worker_table"]
    });

    return WorkerTableView;

});