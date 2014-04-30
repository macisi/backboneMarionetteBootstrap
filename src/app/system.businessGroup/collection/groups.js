/**
 * Created by biangang on 2014/4/17.
 */
define([
    "backbone",
    "app/system.businessGroup/model/list"
], function(Backbone, List){
    "use strict";

    var Groups = Backbone.Collection.extend({
        url: RPC.getBusinessGroupList,
        model: List,
        initialize: function(){
            this.fetch();
        }
    });

    return Groups;

});