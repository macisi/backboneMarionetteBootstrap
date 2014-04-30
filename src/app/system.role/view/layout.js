/**
 * Created by biangang on 2014/4/16.
 */
define([
    "baseLayout",
    "app/system.role/view/roleFormView",
    "app/system.role/view/roleListView",
    "app/system.role/model/role",
    "app/system.role/collection/roleLists"
], function(BaseLayout, RoleFormView, RoleTableView, Role, RoleLists){
   "use strict";

    var Layout = BaseLayout.extend({

        name: "systemRole",

        regions: {
            roleForm: "#J-role-form",
            roleList: "#J-role-list"
        },

        onShow: function(){
            this.roleForm.show(new RoleFormView({
                model: new Role()
            }));
            this.roleList.show(new RoleTableView({
                collection: new RoleLists()
            }));
        }

    });

    return Layout;

});