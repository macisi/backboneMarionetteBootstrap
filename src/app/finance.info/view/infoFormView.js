/**
 * @author: biangang
 * @date: 2014/4/23
 */
define([
    "marionette",
    "templates"
], function (Marionette, tpl) {
    "use strict";

    var InfoFormView = Marionette.ItemView.extend({
        template: tpl["finance_info_form"],
        events: {},
        initialize: function(){
            console.log(this.model)
        }
    });

    return InfoFormView;
});