/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "marionette",
    "templates",
    "app/system.business/view/businessView",
    "app/system.business/collection/businesses"
], function (Marionette, tpl, BusinessView, Businesses) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["system_business_layout"],

        regions: {
            Detail: "#J-detail"
        },

        onShow: function(){
            this.Detail.show(new BusinessView({
                collection: new Businesses()
            }));
        }

    });

    return Layout;
});