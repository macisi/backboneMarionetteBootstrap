/**
 * Created by biangang on 2014/4/16.
 */
define([
    "backbone"
], function(Backbone){

    "use strict";

    var Worker = Backbone.Model.extend({
        url: RPC.addWorker,
        defaults: {
            uid: "",
            nickname: "",
            workno: "",
            name: "",
            role: ""
        }
    });

    return Worker;
});