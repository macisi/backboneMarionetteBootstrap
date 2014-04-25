/**
 * @author: biangang
 * @date: 2014/4/24
 */
define([
    "marionette",
    "templates",
    "dialog"
], function (Marionette, tpl, dialog) {
    "use strict";

    var PayView = Marionette.ItemView.extend({
        template: tpl["pay_pay"],
        events: {
            "click #J-go": "redirect"
        },
        /**
         * 跳转到支付宝付款页面
         */
        redirect: function(e){
            e.preventDefault();
            var d = dialog({
                okValue: '已完成付款',
                skin: 'ui-confirm',
                ok: function () {
                    window.location.hash = "finance/manage"
                },
                cancelValue: '重新付款',
                cancel: function () {}
            });
            d.content("<div class='tac mb10'><i class='icon-warn'></i><b>请在新打开的页面完成支付</b></div>付款完成前，请不要关闭此窗口。<br>完成付款后请根据您的情况选择点击下面的按钮");
            d.showModal();
            //todo: 跳转地址, window.open();
        }
    });

    return PayView;

});