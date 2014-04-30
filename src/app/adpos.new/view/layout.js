/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "baseLayout",
    "app/adpos.new/view/formView",
    "app/adpos.new/model/form"
], function (BaseLayout, FormView, Form) {
    "use strict";

    var Layout = BaseLayout.extend({
        name: "adposNew",

        regions: {
            formRegion: "#J-form"
        },

        onShow: function(){
            this.formRegion.show(new FormView({
                model: new Form()
            }));
        }
    });

    return Layout;
});