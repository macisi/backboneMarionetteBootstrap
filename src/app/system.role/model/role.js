/**
 * Created by biangang on 2014/4/16.
 */
define([
    "backbone",
    "module"
], function(Backbone, module){

    "use strict";

    var Role = Backbone.Model.extend({
        url: RPC.addRole,
        defaults: {
            name: "",
            description: ""
        }
    });

    return Role;
});