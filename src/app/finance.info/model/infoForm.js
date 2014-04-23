/**
 * @author: biangang
 * @date: 2014/4/23
 */
define(["app/componment/form"], function (FormModel) {
    "use strict";

    var InfoForm = FormModel.extend({
        url: RPC.getInfo,
        saveUrl: RPC.saveInfo,
        defaults: {
            industry: "",
            provience: "",
            city: "",
            area: "",
            addition: "",
            street: "",
            postcode: "",
            name: "",
            mobile: "",
            qq: ""
        },
        validateMap: {}
    });

    return InfoForm;
});