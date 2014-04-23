/**
 * Created by biangang on 2014/4/17.
 */
define([
    "backbone",
    "app/system.worker/model/workerList"
], function(Backbone, WorkerList){
    "use strict";

    var WorkerLists = Backbone.Collection.extend({
        url: RPC.getWorkers,
        model: WorkerList,
        initialize: function(){
            this.fetch();
        }
    });

    return WorkerLists;

});