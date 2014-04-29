/**
 * @author: biangang
 * @date: 2014/4/22
 */
define([
    "jquery",
    "underscore",
    "backbone",
    "marionette",
    "templates",
    "app/componment/listView",
    "dialog"
], function ($, _, Backbone, Marionette, tpl, ListView, dialog) {
    "use strict";

    var _events = {};
    _.extend(_events, Backbone.Events);

    var ItemView = Marionette.ItemView.extend({
        template: tpl["adsense_manage_list"],
        tagName: "tr",
        className: "J-row",
        events: {
            "click td": "showDetail",
            "click .J-suspend": "suspend",
            "click .J-update-dailyBudget": "setDailyBudget",
            "click .J-update-totalBudget": "setTotalBudget",
            "click .J-add-price": "setPrice"
        },
        initialize: function(){
            //展开某一行时 需要关闭其它行
            this.listenTo(_events, "showDetail", function(view){
                if (view !== this) {
                    this.closeDetail();
                }
            });
        },
        /**
         * 状态为上线时，要增加暂停按钮
         * todo: 根据真实字段的值做判断
         */
        onBeforeRender: function(){
            if (this.model.get("ad_status") === "上线") {
                this.model.set({
                    "online": true
                });
            }
        },
        /**
         * 暂停广告
         */
        suspend: function(e){
            e.preventDefault();
            var d = dialog({
                content: "<i class=\"icon-warn\"></i>确定暂停该广告？",
                okValue: '确定',
                skin: 'ui-confirm',
                ok: function () {
                    //todo: request
                    return false;
                },
                cancelValue: '取消',
                cancel: function (){}
            });
            d.showModal();
        },
        /**
         * 调整每天预算
         */
        setDailyBudget: function(e){
            e.preventDefault();
            var d = dialog({
                title: '调整每天预算',
                okValue: '确定',
                ok: function () {
                    //todo: get value, then send request
                    console.log(this.node)
                    return false;
                },
                cancelValue: '取消',
                cancel: function () {}
            });
            d.content("<input type='text' class='field'><span class='unit'> 元/天</span>");
            d.showModal();
        },
        /**
         * 调整总预算
         */
        setTotalBudget: function(e){
            e.preventDefault();
            var d = dialog({
                title: '调整总预算',
                okValue: '确定',
                ok: function () {
                    //todo: get value, then send request
                    console.log(this.node)
                    return false;
                },
                cancelValue: '取消',
                cancel: function () {}
            });
            d.content("<input type='text' class='field'><span class='unit'> 元</span>");
            d.showModal();
        },
        /**
         * 加价
         */
        setPrice: function(e){
            e.preventDefault();
            var d = dialog({
                title: '加价',
                okValue: '确定',
                ok: function () {
                    //todo: get value, then send request
                    console.log(this.node)
                    return false;
                },
                cancelValue: '取消',
                cancel: function () {}
            });
            d.content(tpl["adsense_manage_addialog"]());
            d.showModal();
        },
        showDetail: function(e){
            if (e.target.tagName.toLowerCase() === "td") {
                if (this.display) {
                    this.closeDetail();
                } else {
                    this.$detailRow = $(tpl["adsense_manage_detailrow"](this.model.toJSON()));
                    this.$el.after(this.$detailRow);
                    this.display = true;
                    _events.trigger("showDetail", this);
                }
            }
        },
        closeDetail: function(){
            if (this.$detailRow) {
                this.$detailRow.remove();
                this.$detailRow = null;
                this.display = false;
            }
        }
    });

    var AdsenseView = ListView.extend({

        itemView: ItemView,

        itemViewContainer: "tbody",

        template: tpl["adsense_manage_table"]
    });

    return AdsenseView;

});