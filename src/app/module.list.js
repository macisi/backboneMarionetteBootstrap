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
        ,"System.Role": systemRole //��ɫ����
        ,"System.Worker": systemWorker //������Ա����
        ,"Adsense.New": adsenseNew //�½����
        ,"Adsense.Manage": adsenseManage //������
        ,"Finance.Info": financeInfo //�޸�����
        ,"Finance.Detail": financeDetail //������ϸ
        ,"Finance.Manage": financeManage //֧������

    };

    return modules;
});