/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["backbone", "app/business.detail/model/detail"], function (Backbone, Detail) {
    "use strict";

    var Details = Backbone.Collection.extend({
        model: Detail,
        url: RPC.getBusinessDetail
    });

    return Details;
});