/**
 * Created by biangang on 2014/4/16.
 */
define([
    "marionette",
    "templates"
], function(Marionette, tpl){

   "use strict";

    var WorkerFormView = Marionette.ItemView.extend({
        template: tpl["system_worker_worker"],
        events: {
            "click #J-worker-submit": "addWorker",
            "change input[type='text']": "changeFields"
        },
        initialize: function(){
        },
        addWorker: function(){
            //todo: maybe use save later
            this.model.save(this.model.toJSON());
        },
        changeFields: function(e){
            this.model.set(e.target.name, e.target.value);
        }
    });

    return WorkerFormView;

});