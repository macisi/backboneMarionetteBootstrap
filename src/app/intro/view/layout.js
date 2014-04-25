/**
 * @author: biangang
 * @date: 2014/4/24
 */
define([
    "marionette",
    "templates",
    "app/intro/view/introView",
    "app/intro/model/introModel"
], function (Marionette, tpl, IntroView, IntroModel) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["intro_layout"],

        regions: {
            introRegion: "#J-intro"
        },

        onShow: function(){
            this.introRegion.show(new IntroView({
                model: new IntroModel()
            }));
        }

    });

    return Layout;
});