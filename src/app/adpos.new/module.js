/**
 * @author: biangang
 * @date: 2014/4/29
 * @desc: 新建广告位
 */
define(["app/adpos.new/view/layout"], function (Layout) {
    "use strict";

    function Module(M, App){

        //forbid auto start
        M.startWithParent = false;

        M.addInitializer(function(){

            var layout = new Layout();
            App.mainRegion.show(layout);

        });
    }

    return Module;
});