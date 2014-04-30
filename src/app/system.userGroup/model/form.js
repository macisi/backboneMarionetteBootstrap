/**
 * Created by biangang on 2014/4/16.
 */
define([
    "backbone",
    "module"
], function(Backbone, module){

    "use strict";

    var Form = Backbone.Model.extend({
        url: RPC.addUserGroup,
        defaults: {
            "name": "",
            "category": "",
            "type": "",
            "minPrice": ""
        }
    });

    return Form;
});