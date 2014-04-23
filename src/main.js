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
        "backbone.wreqr" : "lib/backbone/backbone.wreqr",
        "backbone.babysitter" : "lib/backbone/backbone.babysitter",
        "dialog": "lib/artDialog/dialog",
        "popup": "lib/artDialog/popup",
        "drag": "lib/artDialog/drag",
        "dialog-config": "lib/artDialog/dialog-config",
        "text": "lib/text",
        "json": "lib/json3.min"
    },

    shim: {
        "handlebars": {
            exports: "Handlebars"
        }
    },

//    urlArgs: "t=" + (new Date()).getTime(),

    deps: ["json"]
});

window.RPC = {
    addRole: "../mock/system/role/add.json",
    getRoles: "../mock/system/role/get.json",
    addWorker: "../mock/system/worker/add.json",
    getWorkers: "../mock/system/worker/get.json",
    getAdsenseList: "../mock/adsense/manage/get.json",
    saveInfo: "../mock/finance/info/save.json",
    getInfo: "../mock/finance/info/get.json"
}

require(["app/app"], function(App){

    App.start();

});