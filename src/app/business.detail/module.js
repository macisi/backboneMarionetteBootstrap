/**
 * @author: biangang
 * @date: 2014/4/30
 * @desc: 商家消费明细
 */
define([
    "app/business.detail/view/layout"
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