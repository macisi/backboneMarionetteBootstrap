/**
 * Created by biangang on 2014/4/16.
 * update:
 * 1.目前gulp的打包工具不支持commonjs的写法 所以改回amd的写法，没办法只能写很长一串了
 */
define([
    "app/nav/module",
    "app/system.role/module",
    "app/system.worker/module",
    "app/adsense.new/module"
], function(nav, systemRole, systemWorker, adsenseNew){
    "use strict";

    var modules = {

        "Nav": nav
        ,"System.Role": systemRole //角色管理
        ,"System.Worker": systemWorker //工作人员管理
        ,"Adsense.New": adsenseNew //新建广告

    };

    return modules;
});