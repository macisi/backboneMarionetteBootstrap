/**
 * @author: biangang
 * @date: 2014/4/23
 */
define([
    "marionette",
    "templates"
], function (Marionette, tpl) {
    "use strict";

    var DetailView = Marionette.ItemView.extend({
        template: tpl["finance_detail_detail"]
    });

    return DetailView;
});