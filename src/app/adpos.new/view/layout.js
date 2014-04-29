/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "marionette",
    "templates",
    "app/adpos.new/view/formView",
    "app/adpos.new/model/form"
], function (Marionette, tpl, FormView, Form) {
    "use strict";

    var Layout = Marionette.Layout.extend({
        template: tpl["adpos_new_layout"],

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