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
        template: tpl["ad_manage_list"],
        tagName: "tr",
        className: "J-row",
        events: {
            "click td": "showDetail",
            "click .J-offline": "offline",
            "click .J-detail": "showInfo"
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
         * 下线
         */
        offline: function(e){
            e.preventDefault();
            var d = dialog({
                content: "<i class=\"icon-warn\"></i>确定下线该广告？",
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
        /*展示商家详情*/
        showInfo: function(e){
            e.preventDefault();
            var d = dialog({
                skin: 'ui-confirm'
            });
            d.content("商家详情");
            d.showModal();
        },
        /*展示广告详情*/
        showDetail: function(e){
            if (e.target.tagName.toLowerCase() === "td") {
                if (this.display) {
                    this.closeDetail();
                } else {
                    this.$detailRow = $(tpl["ad_manage_detailrow"](this.model.toJSON()));
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

    var AdView = ListView.extend({

        itemView: ItemView,

        itemViewContainer: "tbody",

        template: tpl["ad_manage_table"],

        events: _.extend({
            "click .icon-explain": "showTip"
        }, ListView.prototype.events),

        //提示
        showTip: function(e){
            e.preventDefault();
            var d = dialog({
                content: '点击如下公司名称即可查看商家详情',
                skin: 'g-pop',
                title: null,
                quickClose: true
            });
            d.show(e.target);
        }
    });

    return AdView;

});