/**
 * @author: biangang
 * @date: 2014/4/23
 */
define([
    "baseLayout",
    "app/finance.detail/view/detailView",
    "app/finance.detail/model/detail"
], function (BaseLayout, DetailView, Detail) {
    "use strict";

    var Layout = BaseLayout.extend({

        name: "financeDetail",

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