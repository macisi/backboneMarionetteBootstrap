/**
 * @author: biangang
 * @date: 2014/4/24
 */
define([
    "baseLayout",
    "app/intro/view/introView",
    "app/intro/model/introModel"
], function (BaseLayout, IntroView, IntroModel) {
    "use strict";

    var Layout = BaseLayout.extend({

        name: "intro",

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