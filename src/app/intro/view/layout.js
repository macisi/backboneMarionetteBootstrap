/**
 * @author: biangang
 * @date: 2014/4/24
 */
define([
    "marionette",
    "templates",
    "./view/welcomeView",
    "./model/welcomeModel"
], function (Marionette, tpl, WelcomeView, WelcomeModel) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["welcome_layout"],

        regions: {
            welcomeRegion: "#J-welcome"
        },

        onShow: function(){
            this.welcomeRegion.show(new WelcomeView({
                model: new WelcomeModel()
            }));
        }

    });

    return Layout;
});