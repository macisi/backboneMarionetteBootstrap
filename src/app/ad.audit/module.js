/**
 * @desc: 广告审核
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "app/ad.audit/view/layout"
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