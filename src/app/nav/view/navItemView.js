/**
 * Created by biangang on 2014/4/16.
 */
define([
    "marionette",
    "templates"
], function(Marionette, tpl){
    "use strict";

    var NavItemView = Marionette.ItemView.extend({
        className: "nav-block",
        template: tpl["nav_nav"]
    });

    return NavItemView;

});