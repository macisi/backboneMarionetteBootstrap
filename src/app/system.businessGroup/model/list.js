/**
 * @author: biangang
 * @date: 2014/4/17
 */
define(["backbone"], function(Backbone){
    "use strict";

    var List = Backbone.Model.extend({
        defaults: {
            "id": "",
            "name": "",
            "category": "",
            "type": "",
            "minPrice": ""
        }
    });

    return List;

});