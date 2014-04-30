/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["marionette", "templates", "app/adsense.edit/model/form"], function (Marionette, tpl, Form) {
    "use strict";

    var FormView = Marionette.ItemView.extend({
        template: tpl["adsense_edit_form"],
        initialize: function(){
        }
    });

    return FormView;
});