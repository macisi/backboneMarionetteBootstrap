/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["app/componment/form"], function (FormModel) {
    "use strict";

    var Form = FormModel.extend({
        url: RPC.getAdsenseData,
        defaults: {

        }
    });

    return Form;

});