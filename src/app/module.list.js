/**
 * Created by biangang on 2014/4/16.
 * update:
 * 1.Ŀǰgulp�Ĵ�����߲�֧��commonjs��д�� ���ԸĻ�amd��д����û�취ֻ��д�ܳ�һ����
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
        ,"System.Role": systemRole //��ɫ����
        ,"System.Worker": systemWorker //������Ա����
        ,"Adsense.New": adsenseNew //�½����

    };

    return modules;
});