/**
 * Created by biangang on 2014/4/16.
 */
define(["backbone"], function(Backbone){
    "use strict";

    var navItems = new Backbone.Collection([
        {
            type: "系统管理",
            list: [
                {
                    name: "角色管理",
                    path: "system/role"
                },
                {
                    name: "工作人员管理",
                    path: "system/worker"
                },
                {
                    name: "商家管理",
                    path: "system/business"
                },
                {
                    name: "商家群管理",
                    path: "system/businessGroup"
                },
                {
                    name: "用户群管理",
                    path: "system/userGroup"
                }
            ]
        },
        {
            type: "我的广告",
            list: [
                {
                    name: "新建广告",
                    path: "adsense/new"
                },
                {
                    name: "广告管理",
                    path: "adsense/manage"
                }
            ]
        },
        {
            type: "财务管理",
            list: [
                {
                    name: "支付管理",
                    path: "finance/manage"
                },
                {
                    name: "消费明细",
                    path: "finance/detail"
                },
                {
                    name: "修改资料",
                    path: "finance/edit"
                },
            ]
        }
    ]);

    return navItems;
});