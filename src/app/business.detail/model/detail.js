/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["backbone"], function (Backbone) {
    "use strict";

    var Detail = Backbone.Model.extend({
        defaults: {
            "id": "",
            "nickname": "", //商家昵称
            "date": "", //日期
            "ad_id": "", //广告ID
            "ad_name": "", //广告名称
            "status": "", //发票状态
            "deliveryId": "", //快递单号
            "cost": "", //消费金额
            "actioner": "" //操作者
        }
    });

    return Detail;
});