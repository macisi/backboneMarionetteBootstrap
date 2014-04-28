/**
 * @author: biangang
 * @date: 2014/4/18
 */
define([
    "underscore",
    "templates",
    "marionette",
    "pikaday"
], function (_, tpl, Marionette, Pikaday) {
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
            var _this = this;
            this.pickers = [];
            this.$("input[data-bind='datepicker']").each(function(){
                _this.pickers.push(new Pikaday({
                    field: this,
                    minDate: new Date()
                }));
            });
        },
        onClose: function(){
            _.forEach(this.pickers, function(picker){
                picker.destroy();
            });
        }
    });

    return StepView1;

});