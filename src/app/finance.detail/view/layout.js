/**
 * @author: biangang
 * @date: 2014/4/23
 */
define([
    "marionette",
    "templates",
    "app/finance.detail/view/detailView",
    "app/finance.detail/model/detail"
], function (Marionette, tpl, DetailView, Detail) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["finance_detail_layout"],

        regions: {
            financeDetail: "#J-finance-detail"
        },

        onShow: function(){
            this.financeDetail.show(new DetailView({
                model: new Detail()
            }))
        }

    });

    return Layout;
});