/**
 * @author: biangang
 * @date: 2014/4/29
 * @desc: 新建广告位
 */
define(["app/adsense.edit/view/layout"], function (Layout) {
    "use strict";

    function Module(M, App){

        //forbid auto start
        M.startWithParent = false;

        M.addInitializer(function(config){

            if (config && config.query && config.query.id) {

                var layout = new Layout(config.query);
                App.mainRegion.show(layout);

            } else {
                App.showError("请指定用户ID！", function(){
                    window.location.hash = "#ad/manage";
                });
            }

        });
    }

    return Module;
});