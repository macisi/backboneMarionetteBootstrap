/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["backbone"], function (Backbone) {
    "use strict";

    var Log = Backbone.Model.extend({
        defaults: {
            "id": "",
            "name": "",
            "action": "",
            "type": "",
            "url": "",
            "ad_id": "",
            "ad_name": "",
            "ad_sign": "",
            "desc": "",
            "user": "",
            "time": "",
            "ip": ""
        }
    });

    return Log;
});