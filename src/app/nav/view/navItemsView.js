/**
 * Created by biangang on 2014/4/16.
 */
define([
    "underscore",
    "marionette",
    "app/nav/view/navItemView"
], function(_, Marionette, NavItemView){
    "use strict";

    var NavItemsView = Marionette.CollectionView.extend({
        className: "nav-container",
        itemView: NavItemView,
        setCurrentNav: function(path){
            var _this = this;
            if (path.indexOf("?type") === -1) {
                path = path.split("?")[0];
            }
            console.log(path)
            this.$el.find(".nav-block li").each(function(index, li){
                if (path === $(li).data("path")) {
                    _this.$cur && _this.$cur.removeClass("cur");
                    $(li).addClass("cur");
                    _this.$cur = $(li);
                    return false;
                }
            });
        },
        initialize: function(){
            var style = this.el.style,
                delt = $("#J-head").height() + 18,
                $win = $(window),
                height;


            function syncHeight(){
                height = $win.height();
                style.minHeight = (height - delt) + "px";
            }

            var throttled = _.throttle(syncHeight, 200);

            $(window).on("resize", throttled);

            syncHeight();
        }
    });

    return NavItemsView;

});