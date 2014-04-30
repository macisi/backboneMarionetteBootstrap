/**
 * config for require
 */
(function(){
    var isOldIE = !('querySelector' in document && 'localStorage' in window && 'addEventListener' in window);

    require.config({
        paths: {
            "jquery": isOldIE ? "lib/jquery/jquery-1.11.0.min": "lib/jquery/jquery-2.1.0.min",
            "handlebars": "lib/handlebars/handlebars.min",
//        "handlebars": "lib/handlebars/handlebars.runtime.min",
            "templates": "app/templates",
            "underscore": "lib/lodash.underscore",
            "backbone": "lib/backbone/backbone",
            "marionette": "lib/backbone/backbone.marionette",
            "backbone.wreqr" : "lib/backbone/backbone.wreqr",
            "backbone.babysitter" : "lib/backbone/backbone.babysitter",
            "dialog": "lib/artDialog/dialog",
            "popup": "lib/artDialog/popup",
            "drag": "lib/artDialog/drag",
            "dialog-config": "lib/artDialog/dialog-config",
            "text": "lib/text",
            "json": "lib/json2.min",
            "datepicker": "lib/datepicker/bootstrap-datepicker",
            "placeholder": "lib/placeholder/jquery.placeholder",
            "baseLayout": "app/componment/base/baseLayout"
        },

        shim: {
            "handlebars": {
                exports: "Handlebars"
            }
        },

//    urlArgs: "t=" + (new Date()).getTime(),
        deps: ["json"]
    });

})();

require(["app/app", "app/componment/setting"], function(App){

    App.start();

});