/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["backbone", "app/ad.click/model/click"], function (Backbone, Click) {
    "use strict";

    var Clicks = Backbone.Collection.extend({
        model: Click,
        url: RPC.getClickData
    });

    return Clicks;
});