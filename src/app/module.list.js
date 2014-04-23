/**
 * @author: biangang
 * @date: 2014/4/16
 */
define([
    "app/nav/module",
    "app/system.role/module",
    "app/system.worker/module",
    "app/adsense.new/module",
    "app/adsense.manage/module",
    "app/finance.info/module",
    "app/finance.detail/module",
    "app/finance.manage/module"
], function(nav, systemRole, systemWorker, adsenseNew, adsenseManage, financeInfo, financeDetail, financeManage){
    "use strict";

    var modules = {

        "Nav": nav
        ,"System.Role": systemRole //角色管理
        ,"System.Worker": systemWorker //工作人员管理
        ,"Adsense.New": adsenseNew //新建广告
        ,"Adsense.Manage": adsenseManage //广告管理
        ,"Finance.Info": financeInfo //修改资料
        ,"Finance.Detail": financeDetail //消费明细
        ,"Finance.Manage": financeManage //支付管理

    };

    return modules;
});