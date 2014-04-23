/**
 * @author: biangang
 * @date: 2014/4/23
 */
define([
    "marionette",
    "templates"
], function (Marionette, tpl) {
    "use strict";

    var ManageView = Marionette.ItemView.extend({
        template: tpl["finance_manage_manage"]
    });

    return ManageView;
});