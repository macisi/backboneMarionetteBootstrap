/**
 * @desc: 广告管理列表
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "app/adsense.manage/view/layout"
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