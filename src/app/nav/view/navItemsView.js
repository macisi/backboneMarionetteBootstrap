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
            console.log(path)
            var _this = this;
            this.$el.find(".nav-block li").each(function(index, li){
                if (path.indexOf($(li).data("path")) !== -1) {
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