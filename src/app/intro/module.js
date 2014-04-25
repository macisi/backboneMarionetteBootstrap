/**
 * @author: biangang
 * @date: 2014/4/24
 * @desc: 用户首页
 */
define([
    "/view/layout"
], function (Layout) {
    "use strict";

    function Module(M, App){

        M.startWithParent = false;

        M.addInitializer(function(){

            var layout = new Layout();

            App.mainRegion.show(layout);

        });
    }

    return Module;
});