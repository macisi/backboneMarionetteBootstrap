/**
 * build config
 * run:
 * 1. gulp clean
 * 2. gulp prepare
 * 2. node r.js -o build.js
 */
({
    baseUrl: "dist",

    paths: {
        "jquery": "lib/jquery/dist/jquery",
//        "handlebars": "lib/handlebars/handlebars.min",
        "handlebars": "lib/handlebars/handlebars.runtime.min",
        "templates": "app/templates",
        "underscore": "lib/underscore",
        "backbone": "lib/backbone/backbone",
        "marionette": "lib/backbone/backbone.marionette"
    },

    removeCombined: false,

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
    },
    wrapShim: true,

    name: "main",

//    exclude: ["backbone", "marionette", "jquery"],

    out: "dist/main.js"

//    preserveLicenseComments: false
//    generateSourceMaps: true
})