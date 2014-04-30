/**
 * @author: biangang
 * @date: 2014/4/18
 */
define([
    "underscore",
    "templates",
    "marionette",
    "datepicker"
], function (_, tpl, Marionette) {
    "use strict";

    var StepView1 = Marionette.ItemView.extend({
        template: tpl["adsense_new_step1"],
        ui: {
            "next": ".J-next",
            "field": "input[name]"
        },
        events: {
            "click input[data-bind='datepicker']": "setDate"
        },
        behaviors: {
            NextStep: {},
            FormBinding: {}
        },
        initialize: function(){

        },
        setDate: function(e){
        },
        onShow: function(){
            this.delegateEvents();
            this.$datepickers = this.$("input[data-bind='datepicker']");
            this.$datepickers.datepicker();
        },
        onClose: function(){
            this.$datepickers.datepicker("remove");
        }
    });

    return StepView1;

});