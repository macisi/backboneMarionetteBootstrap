/**
 * Created by biangang on 2014/4/22.
 */
define(["backbone"], function(Backbone){
    "use strict";

    var Ad = Backbone.Model.extend({
        defaults: {
            id: "",

            nickname: "", //商家昵称
            company: "", //商家公司名称
            name: "", //广告名称
            startdate: "", //投放时间
            enddate: "", //投放时间
            fee: "",// 每点击付费
            budget: "",// 广告预算
            count: "",// 曝光次数
            browse: "",//曝光用户数
            click: "", // 点击量
            payed: "",// 已付款金额
            status: "",// 广告状态
            audit: "",// 审核状态
            remark: "",//备注
            user: "",//操作者
            rank: ""// 当前竞价排序
        }
    });

    return Ad;

});