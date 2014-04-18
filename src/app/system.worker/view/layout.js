/**
 * Created by biangang on 2014/4/16.
 */
define([
    "templates",
    "app/system.worker/view/workerFormView",
    "app/system.worker/view/workerListView",
    "app/system.worker/model/worker",
    "app/system.worker/collection/workerLists"
], function(tpl, WorkerFormView, WorkerTableView, Worker, WorkerLists){
   "use strict";

    var Layout = Backbone.Marionette.Layout.extend({

        template: tpl["system_worker_layout"],

        regions: {
            workerForm: "#J-worker-form",
            workerList: "#J-worker-list"
        },

        onShow: function(){
            this.workerForm.show(new WorkerFormView({
                model: new Worker()
            }));
            this.workerList.show(new WorkerTableView({
                collection: new WorkerLists()
            }));
        }

    });

    return Layout;

});