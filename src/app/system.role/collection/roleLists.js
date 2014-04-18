/**
 * Created by biangang on 2014/4/17.
 */
define([
    "backbone",
    "app/system.role/model/roleList"
], function(Backbone, RoleList){
    "use strict";

    var RoleLists = Backbone.Collection.extend({
        url: RPC.getRoles,
        model: RoleList,
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

    return RoleLists;

});