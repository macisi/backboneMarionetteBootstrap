/**
 * Created by biangang on 2014/4/17.
 */
define([
    "marionette",
    "templates",
    "dialog"
], function(Marionette, tpl, dialog){
    "use strict";

    var ItemView = Marionette.ItemView.extend({
        template: tpl["system_businessGroup_tr"],
        tagName: "tr",
        events: {
            "click .J-del": "del"
        },
        del: function(e){
            e.preventDefault();
            var d = dialog({
                content: "<i class=\"icon-warn\"></i>确定删除该商家群？",
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
        }
    });

    var ListView = Marionette.CompositeView.extend({

        itemView: ItemView,

        itemViewContainer: "tbody",

        template: tpl["system_businessGroup_table"]
    });

    return ListView;

});