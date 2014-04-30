/**
 * Created by biangang on 2014/4/16.
 */
define([
    "baseLayout",
    "app/system.userGroup/view/formView",
    "app/system.userGroup/view/listView",
    "app/system.userGroup/model/form",
    "app/system.userGroup/collection/groups"
], function(BaseLayout, FormView, ListView, Form, Groups){
   "use strict";

    var Layout = BaseLayout.extend({

        name: "systemUserGroup",

        regions: {
            formRegion: "#J-form",
            listRegion: "#J-list"
        },

        onShow: function(){
            this.formRegion.show(new FormView({
                model: new Form()
            }));
            this.listRegion.show(new ListView({
                collection: new Groups()
            }));
        }

    });

    return Layout;

});