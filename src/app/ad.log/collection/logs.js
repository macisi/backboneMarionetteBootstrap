/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["backbone", "app/ad.log/model/log"], function (Backbone, Log) {
    "use strict";

    var Logs = Backbone.Collection.extend({
        model: Log,
        url: RPC.getLogs
    });

    return Logs;
});