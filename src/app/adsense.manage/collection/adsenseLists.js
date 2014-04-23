/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "backbone",
    "app/adsense.manage/model/adsenseList"
], function (Backbone, AdsenseList) {
    "use strict";

    var AdsenseLists = Backbone.Collection.extend({
        url: RPC.getAdsenseList,
        model: AdsenseList,
        initialize: function(){
            this.fetch();
        }
    });

    return AdsenseLists;
});