/**
 * @author: biangang
 * @date: 2014/4/18
 */
define([
    "app/componment/form"
], function (FormModel) {
    "use strict";

    var Step2 = FormModel.extend({
        defaults: {
            "startDate": "",
            "endDate": "",
            "provinceId": "",
            "cityId": "",
            "districtId": "",
            "gender": "",
            "age": "",
            "industry": "",
            "category": "",
            "group": ""
        },
        validateMap: {
        }
    });

    return Step2;

});