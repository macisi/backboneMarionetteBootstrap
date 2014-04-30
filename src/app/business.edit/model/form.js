/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["app/componment/form"], function (FormModel) {
    "use strict";

    var Form = FormModel.extend({
        url: RPC.getBusinessData,
        defaults: {
            "industry": "", //行业
            "sub_industry": "", //二级行业
            "provinceId": "", //省
            "cityId": "", //市
            "districtId": "", //区
            "street": "",
            "invoice": "", // 发票抬头
            "postcode": "", //邮编
            "name": "", //姓名
            "mobile": "", //手机
            "qq": "",
            "role": "", //角色
            "sales": "", //营销人员
            "contact": "" //是否联系
        }
    });

    return Form;

});