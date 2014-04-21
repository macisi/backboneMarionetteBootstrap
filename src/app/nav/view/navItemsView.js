/**
 * Created by biangang on 2014/4/16.
 */
define([
    "marionette",
    "app/nav/view/navItemView"
], function(Marionette, NavItemView){
    "use strict";

    var NavItemsView = Marionette.CollectionView.extend({
        className: "nav-container",
        itemView: NavItemView,
        setCurrentNav: function(path){
            var _this = this;
            this.$el.find(".nav-block li").each(function(index, li){
                if ($(li).data("path") === path) {
                    _this.$cur && _this.$cur.removeClass("cur");
                    $(li).addClass("cur");
                    _this.$cur = $(li);
                    return false;
                }
            });
        }
    });

    return NavItemsView;

});