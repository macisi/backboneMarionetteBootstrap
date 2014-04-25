/**
 * @author: biangang
 * @date: 2014/4/24
 * @desc: 支付跳转页面
 */
define([
    "app/pay/view/layout"
], function (Layout) {
    "use strict";

    function Module(M, App){

        M.startWithParent = false;

        M.addInitializer(function(){

            var layout = new Layout();

            App.mainRegion.show(layout);
            App.navRegion.hide();

        });

        M.addFinalizer(function(){

            App.navRegion.unhide();

        });
    }

    return Module;
});