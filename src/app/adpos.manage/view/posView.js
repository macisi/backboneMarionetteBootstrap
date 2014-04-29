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
        template: tpl["adpos_manage_list"],
        tagName: "tr",
        className: "J-row",
        events: {
            "click td": "showDetail",
            "click .J-del": "del"
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
         * 删除广告位
         */
        del: function(e){
            e.preventDefault();
            var d = dialog({
                content: "<i class=\"icon-warn\"></i>确定删除该广告？",
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
        showDetail: function(e){
            if (e.target.tagName.toLowerCase() === "td") {
                if (this.display) {
                    this.closeDetail();
                } else {
                    this.$detailRow = $(tpl["adpos_manage_detailrow"](this.model.toJSON()));
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

    var PosView = ListView.extend({

        itemView: ItemView,

        itemViewContainer: "tbody",

        template: tpl["adpos_manage_table"]
    });

    return PosView;

});