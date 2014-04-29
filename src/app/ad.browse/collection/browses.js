/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["backbone", "app/ad.click/model/click"], function (Backbone, Click) {
    "use strict";

    var Browses = Backbone.Collection.extend({
        model: Click,
        url: RPC.getViewData
    });

    return Browses;
});