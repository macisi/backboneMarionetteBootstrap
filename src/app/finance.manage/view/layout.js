/**
 * @author: biangang
 * @date: 2014/4/23
 */
define([
    "baseLayout",
    "app/finance.manage/view/manageView",
    "app/finance.manage/model/manage"
], function (BaseLayout, ManageView, Manage) {
    "use strict";

    var Layout = BaseLayout.extend({

        name: "financeManage",

        regions: {
            financeManage: "#J-finance-manage"
        },

        onShow: function(){
            this.financeManage.show(new ManageView({
                model: new Manage()
            }));
        }

    });

    return Layout;
});