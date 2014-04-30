/**
 * Created by biangang on 2014/4/16.
 */
define([
    "baseLayout",
    "app/system.worker/view/workerFormView",
    "app/system.worker/view/workerListView",
    "app/system.worker/model/worker",
    "app/system.worker/collection/workerLists"
], function(BaseLayout, WorkerFormView, WorkerTableView, Worker, WorkerLists){
   "use strict";

    var Layout = BaseLayout.extend({

        name: "systemWorker",

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