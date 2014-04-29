/**
 * Created by biangang on 2014/4/17.
 */
define([
    "marionette",
    "templates",
    "dialog"
], function(Marionette, tpl, dialog){
    "use strict";

    var RoleListView = Marionette.ItemView.extend({
        template: tpl["system_role_list"],
        tagName: "tr",
        events: {
            "click .J-del": "del"
        },
        del: function(e){
            e.preventDefault();
            var d = dialog({
                content: "<i class=\"icon-warn\"></i>确定删除该角色？",
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

    var RoleTableView = Marionette.CompositeView.extend({

        itemView: RoleListView,

        itemViewContainer: "tbody",

        template: tpl["system_role_table"]
    });

    return RoleTableView;

});