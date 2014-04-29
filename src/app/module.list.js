/**
 * @author: biangang
 * @date: 2014/4/16
 */
define(function(require){
    "use strict";

    return {
        "Nav": require("app/nav/module")
        //系统管理
        ,"System.Role": require("app/system.role/module") //角色管理
        ,"System.Worker": require("app/system.worker/module") //工作人员管理
        ,"System.Business": require("app/system.business/module") //商家管理
        //广告管理
        ,"Ad.Log": require("app/ad.log/module") //广告操作日志
        ,"Ad.Click": require("app/ad.click/module") //广告点击数据
        ,"Ad.Browse": require("app/ad.browse/module") //广告浏览数据
        ,"Adpos.New": require("app/adpos.new/module") //新建广告位
        ,"Adpos.Manage": require("app/adpos.manage/module") //广告位管理
        ,"Adsense.Edit": require("app/adsense.edit/module") //修改广告
        ,"Ad.Manage": require("app/Ad.Manage/module") //广告管理
        //商家
        ,"Adsense.New": require("app/adsense.new/module") //新建广告
        ,"Adsense.Manage": require("app/adsense.manage/module") //广告管理
        ,"Finance.Info": require("app/finance.info/module") //修改资料
        ,"Finance.Detail": require("app/finance.detail/module") //消费明细
        ,"Finance.Manage": require("app/finance.manage/module") //支付管理
        ,"Pay": require("app/pay/module") //支付页面
        ,"Intro": require("app/intro/module") //用户首页
    };

});