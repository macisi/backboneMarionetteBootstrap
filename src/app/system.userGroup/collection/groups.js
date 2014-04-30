/**
 * Created by biangang on 2014/4/17.
 */
define([
    "backbone",
    "app/system.userGroup/model/list"
], function(Backbone, List){
    "use strict";

    var Groups = Backbone.Collection.extend({
        url: RPC.getUserGroupList,
        model: List,
        initialize: function(){
            this.fetch();
        }
    });

    return Groups;

});