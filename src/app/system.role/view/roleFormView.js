/**
 * @author: biangang
 * @date: 2014/4/16
 */
define([
    "marionette",
    "templates"
], function(Marionette, tpl){

   "use strict";

    var RoleFormView = Marionette.ItemView.extend({
        template: tpl["system_role_role"],
        events: {
            "click #J-role-submit": "addRole",
            "change input[type='text']": "changeFields"
        },
        initialize: function(){
        },
        addRole: function(){
            //todo: maybe use save later
            this.model.save(this.model.toJSON());
        },
        changeFields: function(e){
            this.model.set(e.target.name, e.target.value);
        }
    });

    return RoleFormView;

});