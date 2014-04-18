/**
 * Created by biangang on 2014/4/16.
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
            type = type.replace(rFirstLetter, function(arg){return arg.toUpperCase()});
            subType = subType.replace(rFirstLetter, function(arg){return arg.toUpperCase()});

            if (this.App[type] && this.App[type][subType]) {
                this._currentModule && this._currentModule.stop();
                this.App[type][subType].start();
                this._currentModule = this.App[type][subType];
            } else {
                //todo: notify error url
                console.log("error path");
            }
        }

    });

    return Controller;

});
