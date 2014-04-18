/**
 * config for require
 */
require.config({
    paths: {
        "jquery": "lib/jquery/dist/jquery",
        "handlebars": "lib/handlebars/handlebars.min",
//        "handlebars": "lib/handlebars/handlebars.runtime.min",
        "templates": "app/templates",
        "underscore": "lib/underscore",
        "backbone": "lib/backbone/backbone",
        "marionette": "lib/backbone/backbone.marionette",
        "text": "lib/text"
    },

    waitSeconds: 2,

    shim: {
        "backbone": {
            exports: "Backbone",
            deps: ["jquery", "underscore"]
        },
        "marionette": {
            exports: "Backbone.Marionette",
            deps: ["backbone"]
        },
        "handlebars": {
            exports: "Handlebars"
        }
    }

//    deps: ["jquery", "underscore", "text", "backbone", "marionette"]
});

window.RPC = {
    addRole: "../mock/system/role/add.json",
    getRoles: "../mock/system/role/get.json",
    addWorker: "../mock/system/worker/add.json",
    getWorkers: "../mock/system/worker/get.json"
}

require(["app/app"], function(App){

    console.log(App);
    App.start();

});