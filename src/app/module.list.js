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
    "app/finance.manage/module",
    "app/pay/module",
    "app/intro/module"
], function(nav, systemRole, systemWorker, adsenseNew, adsenseManage, financeInfo, financeDetail, financeManage, pay, intro){
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
        ,"Pay": pay //֧��ҳ��
        ,"Intro": intro //�û���ҳ

    };

    return modules;
});