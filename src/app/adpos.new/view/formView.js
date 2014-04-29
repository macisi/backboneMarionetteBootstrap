/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["marionette", "templates", "app/adpos.new/model/form"], function (Marionette, tpl, Form) {
    "use strict";

    var FormView = Marionette.ItemView.extend({
        template: tpl["adpos_new_form"],
        initialize: function(){
            console.log(this)
        }
    });

    return FormView;
});