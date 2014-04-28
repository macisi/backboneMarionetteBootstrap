/**
 * app controller
 * @author: biangang
 * @date: 2014/4/21
 */
define([
    "backbone",
    "marionette",
    "underscore",
    "app/controllers/controller",
    "app/module.list",
    "app/componment/behaviors"
], function(Backbone, Marionette, _, Controller, modules){
   "use strict";

    var App = new Marionette.Application();
    var $body = $("#J-body");

    App.addInitializer(function(){
        //router
        new Marionette.AppRouter({
            controller: new Controller(App),
            appRoutes: {
                ":type": "routeManage",
                ":type/:subType": "routeManage"
            }
        });
        //start router
        Backbone.history.start();
    });

    App.on("initialize:before", function(){
        //register all modules here
        _.each(modules, function(module, moduleName){
            App.module(moduleName, module);
        });

        App.vent.on("navTo", function(path){
            App.Nav.updateCurrentNav(path);
        });

    });

    App.on("initialize:after", function(){
    });

    //loading 状态监听
    App.vent.on("loading", function(){
        App.mainRegion.$el && App.mainRegion.$el.addClass("loading");
    });
    App.vent.on("loaded", function(){
        App.mainRegion.$el.removeClass("loading");
    });

    App.addRegions({
        navRegion: "#J-nav",
        mainRegion: "#J-main"
    });
    //侧栏显示隐藏切换
    App.navRegion.hide = function(){
        $body.addClass("expansion");
    };
    App.navRegion.unhide = function(){
        $body.removeClass("expansion");
    };

    return App;

});