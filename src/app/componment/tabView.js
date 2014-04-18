/**
 * @author: biangang
 * @date: 2014/4/18
 * @desc: tab switch view
 */
define(["marionette"], function (Marionette) {
    "use strict";

    var TabView = Marionette.ItemView.extend({
        events: {
            "click [data-role='trigger']": "showTab"
        },
        classConfig: {
            current: "cur",
            hide: "g-hide"
        },
        cur: 0,
        showTab: function(e){
            e.preventDefault();
            this.$trigger = this.$trigger || this.$el.find("[data-role='trigger']");
            this.$content = this.$content || this.$el.find("[data-role='content']");
            var index = this.$trigger.index(e.target);
            if (index !== this.cur) {
                this.$trigger.eq(index).addClass(this.classConfig.current);
                this.$content.eq(index).removeClass(this.classConfig.hide);
                this.$trigger.eq(this.cur).removeClass(this.classConfig.current);
                this.$content.eq(this.cur).addClass(this.classConfig.hide);
                this.cur = index;
            }
        }
    });

    return TabView;

});