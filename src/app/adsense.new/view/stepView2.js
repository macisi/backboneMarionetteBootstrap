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

    var StepView1 = TabView.extend({
        template: tpl["adsense_new_step2"],
        events: _.extend({
            "change input": "update",
            "click .J-next": "nextStep",
            "click .J-prev": "prevStep"
        }, TabView.prototype.events),
        initialize: function(){
        },
        update: function(e){
            this.model.set(e.target.name, e.target.value);
        },
        nextStep: function(e){
            e.preventDefault();
            if (this.model.isValid()) {
                //todo: maybe send reqeuest
                console.log("next");
                this.trigger("next");
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
            console.log("stepView2 close");
        },
        onShow: function(){
            this.delegateEvents();
            console.log("stepView2 show");
        }
    });

    return StepView1;

});