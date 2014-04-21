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
            var path = [type, subType].join("/");
            type = type.replace(rFirstLetter, function(arg){return arg.toUpperCase()});
            subType = subType.replace(rFirstLetter, function(arg){return arg.toUpperCase()});

            if (this.App[type] && this.App[type][subType]) {
                //stop previous current module
                this._currentModule && this._currentModule.stop();
                this.App[type][subType].start();
                //save current module
                this._currentModule = this.App[type][subType];
                //trigger nav update
                this.App.vent.trigger("navTo", path);
            } else {
                //todo: notify error url
                console.log("error path");
            }
        }

    });

    return Controller;

});
