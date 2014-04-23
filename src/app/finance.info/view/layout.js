/**
 * @author: biangang
 * @date: 2014/4/23
 */
define([
    "marionette",
    "templates",
    "app/finance.info/view/infoFormView",
    "app/finance.info/model/infoForm"
], function (Marionette, tpl, InfoFormView, InfoForm) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["finance_info_layout"],

        regions: {
            infoForm: "#J-info-form"
        },

        initialize: function(query){
            console.log(query);
            var _this = this;

            this.on("show", function(){
                if(query && query.type === "edit") {
                    //编辑
                    var model = new InfoForm();
                    model.on("change", function(){
                        _this.infoForm.show(new InfoFormView({
                            model: model
                        }));
                    });
                    model.fetch();
                } else if (query && query.type === "new") {
                    //新建
                    this.$el.find("#J-type").text("完善");
                    this.infoForm.show(new InfoFormView({
                        model: new InfoForm()
                    }));
                } else {
                    //todo: hash错误, 跳转吧
                }
            });

        }

    });

    return Layout;
});