/**
 * @author: biangang
 * @date: 2014/4/17
 */
define(["backbone"], function(Backbone){
    "use strict";

    var AdsenseList = Backbone.Model.extend({
        defaults: {
            name: "",
            description: ""
        },
        initialize: function(){
        }
    });

    return AdsenseList;

});