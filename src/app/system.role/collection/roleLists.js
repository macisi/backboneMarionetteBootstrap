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
            this.fetch();
        }
    });

    return RoleLists;

});