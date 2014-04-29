/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "backbone",
    "app/ad.manage/model/ad"
], function (Backbone, Ad) {
    "use strict";

    var Ads = Backbone.Collection.extend({
        url: RPC.getAdList,
        model: Ad,
        initialize: function(){
            this.fetch();
        }
    });

    return Ads;
});