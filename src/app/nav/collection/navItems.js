/**
 * @author: biangang
 * @date: 2014/4/16
 * TODO:
 * 1.不同权限的帐号登录是应该之看到对应的菜单
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
            type: "广告管理",
            list: [
                {
                    name: "新建广告位",
                    path: "adpos/new"
                },
                {
                    name: "广告位管理",
                    path: "adpos/manage"
                },
                {
                    name: "广告管理",
                    path: "ad/manage"
                },
                {
                    name: "广告审核",
                    path: "ad/audit"
                },
                {
                    name: "商家消费明细",
                    path: "business/detail"
                },
                {
                    name: "广告操作日志",
                    path: "ad/log"
                },
                {
                    name: "广告点击数据",
                    path: "ad/click"
                },
                {
                    name: "广告浏览数据",
                    path: "ad/browse"
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
                    path: "finance/info?type=edit"
                },
            ]
        }
    ]);

    return navItems;
});