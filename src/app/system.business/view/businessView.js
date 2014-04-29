/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["marionette", "templates", "app/componment/listView", "dialog"], function (Marionette, tpl, ListView, dialog) {
    "use strict";

    var TrView = Marionette.ItemView.extend({
        tagName: "tr",
        template: tpl["system_business_tr"],
        events: {
            "click .J-detail": "showDetail",
            "click .J-unpass": "unpass",
            "click .J-remark": "addRemark",
            "click .J-allocation": "allocation"
        },
        /*显示商家详情*/
        showDetail: function(e){
            e.preventDefault();
            var d = dialog({
                okValue: '确定',
                skin: 'ui-confirm',
                cancelValue: '取消'
            });
            d.content("商家详情");
            d.showModal();
        },
        /*不通过*/
        unpass: function(e){
            e.preventDefault();
            var d = dialog({
                content: "<i class=\"icon-warn\"></i><span class=\"inlineBlock va\">确定不通过该商家？<br>这将导致该商家的所有广告下线！？</span>",
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
        /*添加备注*/
        addRemark: function(e){
            e.preventDefault();
            //todo: 备注
        },
        /*分配给*/
        allocation: function(e){
            e.preventDefault();
            var d = dialog({
                title: '分配给',
                okValue: '确定',
                ok: function () {
                    //todo: get value, then send request
                    console.log(this.node)
                    return false;
                },
                cancelValue: '取消',
                cancel: function () {}
            });
            d.content("<label for=''>营销人员：</label><select name='' id=''><option value=''>请选择</option></select>");
            d.showModal();
        }
    });

    var TableView = ListView.extend({
        itemView: TrView,
        itemViewContainer: "tbody",
        template: tpl["system_business_table"]
    });

    return TableView;
});