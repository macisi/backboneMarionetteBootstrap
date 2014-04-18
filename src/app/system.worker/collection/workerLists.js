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
            this.fetch({
                context: this
            }).done(function(res){
                //todo: how to make it globally
                if (res.success) {
                    this.set(res.content);
                }
            });
        }
    });

    return WorkerLists;

});