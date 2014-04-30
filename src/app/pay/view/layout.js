/**
 * @author: biangang
 * @date: 2014/4/24
 */
define([
    "baseLayout",
    "app/pay/view/payView",
    "app/pay/model/payModel"
], function (BaseLayout, PayView, PayModel) {
    "use strict";

    var Layout = BaseLayout.extend({

        name: "pay",

        regions: {
            payRegion: "#J-pay"
        },

        onShow: function(){
            this.payRegion.show(new PayView({
                model: new PayModel()
            }));
        }

    });

    return Layout;
});