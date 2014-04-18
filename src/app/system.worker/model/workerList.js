/**
 * Created by biangang on 2014/4/17.
 */
define(["backbone"], function(Backbone){
    "use strict";

    var RoleList = Backbone.Model.extend({
        defaults: {
            name: "",
            description: ""
        },
        initialize: function(){
        }
    });

    return RoleList;

});