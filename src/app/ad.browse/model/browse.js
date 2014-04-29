/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["backbone"], function (Backbone) {
    "use strict";

    var Browse = Backbone.Model.extend({
        defaults: {
            "id": "",
            "createTime": "", //创建时间
            "sid": "", //用户sid
            "uid": "", //用户uid
            "nickname": "", //用户昵称
            "type": "", //匹配类型
            "sign": "", //广告位标识
            "ad_id": "", //广告id
            "business_name": "", //商家名称
            "business_condition": "", //商家投放条件
            "match": "", //用户匹配项
            "similar": "", //用户相似度
            "arg": "" //点击参数
        }
    });

    return Browse;
});