/**
 * @author: biangang
 * @date: 2014/4/19
 */
define([
    "templates",
    "underscore",
    "marionette",
    "app/componment/tabView"
], function (tpl, _, Marionette, TabView) {
    "use strict";

    var StepView4 = TabView.extend({
        template: tpl["adsense_new_step4"],
        events: _.extend({
            "change input": "update",
            "click .J-submit": "submit",
            "click .J-prev": "prevStep"
        }, TabView.prototype.events),
        initialize: function(){

        },
        update: function(e){
            this.model.set(e.target.name, e.target.value);
        },
        submit: function(e){
            e.preventDefault();
            if (this.model.isValid()) {
                //todo: maybe send reqeuest
                console.log("submit");
            } else {
                //todo: showError
                console.log(this.model.validationError);
            }
        },
        prevStep: function(e){
            e.preventDefault();
            this.trigger("prev");
        },
        onClose: function(){
            console.log("stepView3 close");
        },
        onShow: function(){
            this.delegateEvents();
            console.log("stepView3 show");
        }
    });

    return StepView4;

});