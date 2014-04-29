/**
 * @author: biangang
 * @date: 2014/4/23
 * @desc: 修改资料 & 完善资料
 */
define([
    "app/finance.info/view/layout"
], function (Layout) {
    "use strict";

    function Module(M, App){

        //forbid auto start
        M.startWithParent = false;

        this.on("start", function(option){

            var layout = new Layout(option.query);
            App.mainRegion.show(layout);

        });

    }

    return Module;

});