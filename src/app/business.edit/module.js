/**
 * @author: biangang
 * @date: 2014/4/30
 * @desc: 编辑商家
 */
define(["app/business.edit/view/layout"], function (Layout) {
    "use strict";

    function Module(M, App){

        //forbid auto start
        M.startWithParent = false;

        M.addInitializer(function(config){

            if (config && config.query && config.query.id) {

                var layout = new Layout(config.query);
                App.mainRegion.show(layout);

            } else {
                App.showError("请指定商家ID！", function(){
                    window.location.hash = "#system/business";
                });
            }

        });
    }

    return Module;
});