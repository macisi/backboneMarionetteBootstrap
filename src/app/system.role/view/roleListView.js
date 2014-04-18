/**
 * Created by biangang on 2014/4/17.
 */
define([
    "marionette",
    "templates"
], function(Marionette, tpl){
    "use strict";

    var RoleListView = Marionette.ItemView.extend({
        template: tpl["system_role_list"],
        tagName: "tr"
    });

    var RoleTableView = Marionette.CompositeView.extend({

        itemView: RoleListView,

        itemViewContainer: "tbody",

        template: tpl["system_role_table"]
    });

    return RoleTableView;

});