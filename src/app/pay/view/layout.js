/**
 * @author: biangang
 * @date: 2014/4/24
 */
define([
    "marionette",
    "templates",
    "app/pay/view/payView",
    "app/pay/model/payModel"
], function (Marionette, tpl, PayView, PayModel) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["pay_layout"],

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