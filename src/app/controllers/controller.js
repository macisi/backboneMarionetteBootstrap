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
            var path = [type, subType].join("/"), _module;
            query && (path += ("?" + query));
            type = type.replace(rFirstLetter, function(arg){return arg.toUpperCase()});
            subType = subType && subType.replace(rFirstLetter, function(arg){return arg.toUpperCase()});

            _module = this.App[type];
            _module = (_module && subType) ? _module[subType]: _module;

            if (_module) {
                //stop previous current module
                this._currentModule && this._currentModule.stop();
                _module.start({query: this.parseQuery(query)});
                //save current module
                this._currentModule = _module;
                //trigger nav update
                this.App.vent.trigger("navTo", path);
                this.App.vent.trigger("loaded");
            } else {
                //todo: notify error url
                console.log("error path:" + JSON.stringify({
                    type: type,
                    subType: subType,
                    query: query
                }));
                this.App.vent.trigger("loading");
                this.App.mainRegion.close();
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
