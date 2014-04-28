/**
 * @author: biangang
 * @date: 2014/4/19
 */
define([
    "templates",
    "marionette"
], function (tpl, Marionette) {
    "use strict";

    var StepView3 = Marionette.ItemView.extend({
        template: tpl["adsense_new_step3"],
        ui: {
            "next": ".J-next",
            "prev": ".J-prev",
            "field": "input"
        },
        events: {
        },
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

    return StepView3;

});