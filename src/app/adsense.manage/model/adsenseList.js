/**
 * Created by biangang on 2014/4/22.
 */
define(["backbone"], function(Backbone){
    "use strict";

    var RoleList = Backbone.Model.extend({
        defaults: {
            id: "",
            name: "", //广告名称
            startDate: "", //投放开始时间
            endDate: "", //投放结束时间
            unitPrice: "", //每点击付费
            budget: "", //广告预算
            count: "",//曝光次数
            views: "",//曝光用户量
            click: "",//点击量
            payed: "",//已付款金额
            ad_status: "",//广告状态
            audit_status: "",//审核状态
            remark: "",//备注
            rank: "",//竞价排序

            "position": "",//位置
            "city": "",//地域
            "gender": "",//性别
            "industry": "",//行业
            "category": "",//品类
            "group": "",//人群
            "releaseDate": "",//最近上线日期
            "adv_name": "",//another广告名称 是否和上面的广告名称相同
            "adv_title": "",//广告标题
            "adv_desc": "",//广告描述
            "adv_img": ""//广告图片预览地址
        },
        initialize: function(){
        }
    });

    return RoleList;

});