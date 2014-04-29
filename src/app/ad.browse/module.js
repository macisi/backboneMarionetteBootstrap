/**
 * @author: biangang
 * @date: 2014/4/29
 * @desc: 广告浏览数据
 */
define([
    "app/ad.browse/view/layout"
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