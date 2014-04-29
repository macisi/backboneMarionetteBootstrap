/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["backbone", "app/system.business/model/business"], function (Backbone, Business) {
    "use strict";

    var Businesses = Backbone.Collection.extend({
        url: RPC.getBusinessList,
        model: Business
    });

    return Businesses;
});