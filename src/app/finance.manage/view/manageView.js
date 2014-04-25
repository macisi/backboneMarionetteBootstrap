/**
 * @author: biangang
 * @date: 2014/4/23
 */
define([
    "marionette",
    "templates",
    "dialog"
], function (Marionette, tpl, dialog) {
    "use strict";

    var ManageView = Marionette.ItemView.extend({
        template: tpl["finance_manage_manage"],
        events: {
            "click #J-recharge": "recharge",
            "click #J-thaw": "thaw",
            "click #J-withdrawal": "withdrawal"
        },
        /*充值*/
        recharge: function(e){
            e.preventDefault();
            var d = dialog({
                title: '充值',
                okValue: '确定',
                ok: function () {
                    //todo: get value, then send request
                    console.log(this.node)
                    return false;
                },
                cancelValue: '取消',
                cancel: function () {}
            });
            d.content("<label class='small grey'>充值 </label><input type='text' class='field'><span class='unit'> 元</span>");
            d.showModal();
        },
        /*解冻*/
        thaw: function(e){
            e.preventDefault();
            var d = dialog({
                content: "<i class=\"icon-warn\"></i><span class=\"inlineBlock va\">这将会导致您所有的广告直接下线，<br>您确认要这么做吗？</span>",
                okValue: '确定',
                skin: 'ui-confirm',
                ok: function () {
                    //todo: request
                    return false;
                },
                cancelValue: '取消',
                cancel: function (){}
            });
            d.showModal();
        },
        /*提现*/
        withdrawal: function(e){
            e.preventDefault();
            var d = dialog({
                title: '申请提现',
                okValue: '确定',
                ok: function () {
                    //todo: get value, then send request
                    console.log(this.node)
                    return false;
                },
                cancelValue: '取消',
                cancel: function () {}
            });
            d.content("<label class='small grey'>提现金额 </label><input type='text' class='field'><span class='unit'> 元</span>");
            d.showModal();
        }
    });

    return ManageView;
});