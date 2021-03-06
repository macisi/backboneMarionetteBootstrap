/**
 * @desc: 广告位管理
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "app/adpos.manage/view/layout"
], function (Layout) {
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