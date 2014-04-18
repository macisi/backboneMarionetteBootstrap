define([
    "backbone",
    "marionette",
    "underscore",
    "app/controllers/controller",
    "app/module.list"
], function(Backbone, Marionette, _, Controller, modules){
   "use strict";

    //TODO: for test
    Backbone.emulateHTTP = true;
    Backbone.emulateJSON = true;

    //fix ie's console error
    if (typeof console == "undefined") {
        this.console = { log: function (msg) { alert(msg); } };
    }

    //TODO: global modify
//    _.extend(Backbone.Model.prototype, {
//        parse: function(resp, options) {
//            if (resp.success) {
//                return resp.content;
//            }
//        }
//    });
//    _.extend(Backbone.Collection.prototype, {
//        parse: function(resp, options) {
//            if (resp.success) {
//                return resp.content;
//            }
//        }
//    });

    var App = new Marionette.Application();

    App.addInitializer(function(){
        //router
        new Marionette.AppRouter({
            controller: new Controller(App),
            appRoutes: {
                ":type/:subType": "routeManage"
            }
        });
        //start router
        Backbone.history.start();
    });

    App.on("initialize:before", function(){
        //regist all modules here
        _.each(modules, function(module, moduleName){
            App.module(moduleName, module);
        });
    });

    App.addRegions({
        navRegion: "#J-nav",
        mainRegion: "#J-main"
    });

    return App;

});