/**
 * build config
 * run:
 * 1. gulp clean
 * 2. gulp prepare
 * 2. node build/r.js -o build/build.js
 */
({
    baseUrl: "dist",

    paths: {
        "jquery": "lib/jquery/dist/jquery",
        "handlebars": "lib/handlebars/handlebars.runtime.min",
        "templates": "app/templates",
        "underscore": "lib/underscore",
        "backbone": "lib/backbone/backbone",
        "marionette": "lib/backbone/backbone.marionette",
        'backbone.wreqr' : 'lib/backbone/backbone.wreqr',
        'backbone.babysitter' : 'lib/backbone/backbone.babysitter'
    },

    removeCombined: false,

    shim: {
        "handlebars": {
            exports: "Handlebars"
        }
    },
//    wrapShim: true,

    name: "main",

//    exclude: ["backbone", "marionette", "jquery"],

    out: "dist/main.js"

//    preserveLicenseComments: false
//    generateSourceMaps: true
})