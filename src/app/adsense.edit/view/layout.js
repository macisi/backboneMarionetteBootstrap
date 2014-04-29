/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "marionette",
    "templates",
    "app/adsense.edit/view/formView",
    "app/adsense.edit/model/form"
], function (Marionette, tpl, FormView, Form) {
    "use strict";

    var Layout = Marionette.Layout.extend({
        template: tpl["adsense_edit_layout"],

        regions: {
            formRegion: "#J-form"
        },

        initialize: function(query){

            var model = new Form(query);
            var formView = new FormView({
                model: model
            });
            var _this = this;

            model.on("sync", function(){
                _this.formRegion.show(formView);
            });

            this.on("show", function(){
                model.fetch({
                    data: {
                        id: model.id
                    }
                });
            });
        }
    });

    return Layout;
});