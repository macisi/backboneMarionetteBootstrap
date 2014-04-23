/**
 * @author: biangang
 * @date: 2014/4/23
 */
define([
    "marionette",
    "templates",
    "app/finance.manage/view/manageView",
    "app/finance.manage/model/manage"
], function (Marionette, tpl, ManageView, Manage) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["finance_manage_layout"],

        regions: {
            financeManage: "#J-finance-manage"
        },

        onShow: function(){
            this.financeManage.show(new ManageView({
                model: new Manage()
            }))
        }

    });

    return Layout;
});