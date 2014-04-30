/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["marionette", "templates", "app/componment/listView", "dialog"], function (Marionette, tpl, ListView, dialog) {
    "use strict";

    var DetailItem = Marionette.ItemView.extend({
        tagName: "tr",
        template: tpl["business_detail_tr"],
        events: {
            "click .J-edit": "edit",
            "click .J-delivery": "delivery"
        },
        //修改
        edit: function(e){
            e.preventDefault();

        },
        //邮寄
        delivery: function(e){
            e.preventDefault();
            var d = dialog({
                title: '邮寄',
                okValue: '确定',
                ok: function () {
                    //todo: get value, then send request
                    console.log(this.node)
                    return false;
                },
                cancelValue: '取消',
                cancel: function () {}
            });
            d.content("<label for='deliveryId'>快递单号:</label><input name='deliveryId' type='text' class='field'>");
            d.showModal();
        }
    });

    var DetailView = ListView.extend({
        itemView: DetailItem,
        itemViewContainer: "tbody",
        template: tpl["business_detail_table"]
    });

    return DetailView;
});