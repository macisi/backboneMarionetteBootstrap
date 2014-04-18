/**
 * Created by biangang on 2014/4/16.
 */
define([
    "app/nav/collection/navItems",
    "app/nav/view/navItemView",
    "app/nav/view/navItemsView"
], function(navItems, NavItemView, NavItemsView){
    "use strict";

    function Module(M, App){

        M.addInitializer(function(){

            var navItemsView = new NavItemsView({
                collection: navItems
            });

            App.navRegion.show(navItemsView);

        });
    }

    return Module;
});