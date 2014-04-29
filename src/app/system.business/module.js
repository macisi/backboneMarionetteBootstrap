/**
 * @author: biangang
 * @date: 2014/4/29
 * @desc: 商家管理
 */
define([
    "app/system.business/view/layout"
], function (Layout) {
    "use strict";

    function Module(M, App){

        M.startWithParent = false;

        this.on("start", function(option){

            var layout = new Layout(option.query);
            App.mainRegion.show(layout);

        });
    }

    return Module;
});