/**
 * build config
 * run:
 * 1. gulp clean
 * 2. gulp prepare
 * 2. node build/r.js -o build/build.js
 */
({
    baseUrl: 'dist',

    paths: {
        'jquery': 'lib/jquery/dist/jquery',
        'handlebars': 'lib/handlebars/handlebars.runtime.min',
        'templates': 'app/templates',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone/backbone',
        'marionette': 'lib/backbone/backbone.marionette',
        'backbone.wreqr' : 'lib/backbone/backbone.wreqr',
        'backbone.babysitter' : 'lib/backbone/backbone.babysitter',
        'dialog': 'lib/artDialog/dialog',
        'popup': 'lib/artDialog/popup',
        'drag': 'lib/artDialog/drag',
        'dialog-config': 'lib/artDialog/dialog-config',
        'json': 'lib/json3.min'

    },

    removeCombined: false,

    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    },
//    wrapShim: true,

    name: 'main',

//    exclude: ['backbone', 'marionette', 'jquery'],

    out: 'dist/main.js',

    deps: ['json']

//    preserveLicenseComments: false
//    generateSourceMaps: true
})