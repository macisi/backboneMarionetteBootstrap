/**
 * @author: biangang
 * @date: 2014/4/18
 */
define([
    "templates",
    "underscore",
    "marionette",
    "app/componment/tabView"
], function (tpl, _, Marionette, TabView) {
    "use strict";

    var StepView2 = TabView.extend({
        template: tpl["adsense_new_step2"],
        ui: {
            "next": ".J-next",
            "prev": ".J-prev",
            "field": "input"
        },
        events: _.extend({
        }, TabView.prototype.events),
        behaviors: {
            NextStep: {},
            PrevStep: {},
            FormBinding: {}
        },
        initialize: function(){
        },

        onShow: function(){
            this.delegateEvents();
        }
    });

    return StepView2;

});