/**
 * @author: biangang
 * @date: 2014/4/23
 * @desc: 消费明细
 */
define([
    "app/finance.detail/view/layout"
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