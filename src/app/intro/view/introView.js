/**
 * @author: biangang
 * @date: 2014/4/24
 */
define([
    "marionette",
    "templates"
], function (Marionette, tpl) {
    "use strict";

    var PayView = Marionette.ItemView.extend({
        template: tpl["intro_intro"],
        events: {
            "click .J-prev": "showPrev",
            "click .J-next": "showNext"
        },
        initialize: function(){
        },
        onShow: function(){
            this.$items = this.$el.find(".slider-item");
            this.len = this.$items.length;
            this.cur = 0;
        },
        showPrev: function(e){
            e.preventDefault();
            var prev = this.cur === 0 ? this.len - 1: this.cur - 1;
            this.$items.eq(prev).fadeIn();
            this.$items.eq(this.cur).fadeOut();
            this.cur = prev;
        },
        showNext: function(e){
            e.preventDefault();
            var next = this.cur === this.len - 1 ? 0: this.cur + 1;
            this.$items.eq(next).fadeIn();
            this.$items.eq(this.cur).fadeOut();
            this.cur = next;
        }
    });

    return PayView;

});