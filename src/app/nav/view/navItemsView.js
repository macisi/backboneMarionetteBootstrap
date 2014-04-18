/**
 * Created by biangang on 2014/4/16.
 */
define([
    "marionette",
    "app/nav/view/navItemView"
], function(Marionette, NavItemView){
    "use strict";

    var NavItemsView = Marionette.CollectionView.extend({
        itemView: NavItemView
    });

    return NavItemsView;

});