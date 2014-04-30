/**
 * Created by biangang on 2014/4/30.
 * @desc: 用户群管理
 */
define([
    "app/system.userGroup/view/layout"
], function(Layout){
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