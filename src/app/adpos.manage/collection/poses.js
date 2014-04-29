/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "backbone",
    "app/adpos.manage/model/pos"
], function (Backbone, Pos) {
    "use strict";

    var Poses = Backbone.Collection.extend({
        url: RPC.getAdPosList,
        model: Pos,
        initialize: function(){
            this.fetch();
        }
    });

    return Poses;
});