/**
 * @author: biangang
 * @date: 2014/4/16
 */
define([
    "marionette"
], function(Marionette){

    "use strict";

    var rFirstLetter = /^[a-z]?/;

    var Controller = Marionette.Controller.extend({

        initialize: function(App){

            this.App = App;

        },

        routeManage: function(type, subType, query){
            console.log("nav to: " + JSON.stringify({
                type: type,
                subType: subType,
                query: query
            }));
            var path = [type, subType].join("/");
            query && (path += ("?" + query));
            type = type.replace(rFirstLetter, function(arg){return arg.toUpperCase()});
            subType = subType.replace(rFirstLetter, function(arg){return arg.toUpperCase()});

            if (this.App[type] && this.App[type][subType]) {
                //stop previous current module
                this._currentModule && this._currentModule.stop();
                this.App[type][subType].start({query: this.parseQuery(query)});
                //save current module
                this._currentModule = this.App[type][subType];
                //trigger nav update
                this.App.vent.trigger("navTo", path);
            } else {
                //todo: notify error url
                console.log("error path:" + JSON.stringify({
                    type: type,
                    subType: subType,
                    query: query
                }));
            }
        },

        parseQuery: function(query){
            if (!query) return null;
            var ret = {}, temp;
            query = query.split("&");
            for(var i = 0, len = query.length; i < len; i += 1) {
                temp = query[i].split("=");
                ret[temp[0]] = temp[1];
            }
            return ret;
        }

    });

    return Controller;

});
