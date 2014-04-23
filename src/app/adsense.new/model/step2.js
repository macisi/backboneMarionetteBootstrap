/**
 * @author: biangang
 * @date: 2014/4/18
 */
define([
    "app/componment/form"
], function (FormModel) {
    "use strict";

    var Step1 = FormModel.extend({
        defaults: {
            "equipment": "",
            "city": "",
            "channel": "",
            "type": "",
            "size": "",
            "previewUrl": "./dist/img/default.png"
        },
        validateMap: {
//            equipment: ["required"]
        }
    });

    return Step1;

});