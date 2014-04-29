/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["backbone"], function (Backbone) {
    "use strict";

    var Click = Backbone.Model.extend({
        defaults: {
            "id": "",
            "nickname": "", // 商家昵称
            "ip": "",
            "company": "", //商家公司名称
            "total": "", //账户总充值金额
            "remain": "", //账户余额
            "payed": "", //已付款金额
            "count": "", //  充值次数
            "days": "", //广告上线天数
            "average_converse": "", //平均转化率
            "last_converse": "", //上次转化率
            "pass": "", // 是否通过
            "allocation": "", //分配人员
            "marketing": "", //营销人员
            "concacted": "", //是否联系
            "remark": "" //备注
        }
    });

    return Click;
});