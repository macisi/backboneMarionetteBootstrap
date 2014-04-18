/**
 * build config
 */
({
    baseUrl: "src",

    paths: {
        "jquery": "lib/jquery/dist/jquery",
//        "handlebars": "lib/handlebars/handlebars.min",
        "handlebars": "lib/handlebars/handlebars.runtime.min",
        "templates": "app/templates",
        "underscore": "lib/underscore",
        "backbone": "lib/backbone/backbone",
        "marionette": "lib/backbone/backbone.marionette"
    },

//    findNestedDependencies: true,
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

    out: "js/main.build.js"

//    preserveLicenseComments: false,
//    generateSourceMaps: true
})