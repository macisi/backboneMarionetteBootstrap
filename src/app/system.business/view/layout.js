/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "baseLayout",
    "app/system.business/view/businessView",
    "app/system.business/collection/businesses"
], function (BaseLayout, BusinessView, Businesses) {
    "use strict";

    var Layout = BaseLayout.extend({

        name: "systemBusiness",

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