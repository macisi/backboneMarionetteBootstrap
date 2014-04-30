/**
 * @author: biangang
 * @date: 2014/4/16
 */
define([
    "marionette",
    "templates"
], function(Marionette, tpl){

   "use strict";

    var FormView = Marionette.ItemView.extend({
        template: tpl["system_userGroup_form"],
        events: {
            "click #J-submit": "addGroup",
            "change input[type='text']": "changeFields"
        },
        initialize: function(){
        },
        addGroup: function(){
            //todo: maybe use save later
            this.model.save(this.model.toJSON());
        },
        changeFields: function(e){
            this.model.set(e.target.name, e.target.value);
        }
    });

    return FormView;

});