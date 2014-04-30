/**
 * Created by biangang on 2014/4/16.
 */
define([
    "baseLayout",
    "app/system.businessGroup/view/formView",
    "app/system.businessGroup/view/listView",
    "app/system.businessGroup/model/form",
    "app/system.businessGroup/collection/groups"
], function(BaseLayout, FormView, ListView, Form, Groups){
   "use strict";

    var Layout = BaseLayout.extend({

        name: "systemBusinessGroup",

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