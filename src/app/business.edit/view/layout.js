/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "baseLayout",
    "app/business.edit/view/formView",
    "app/business.edit/model/form"
], function (BaseLayout, FormView, Form) {
    "use strict";

    var Layout = BaseLayout.extend({
        name: "businessEdit",

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