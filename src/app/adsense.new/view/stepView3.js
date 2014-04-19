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
        events: {
            "change input": "update",
            "click .J-next": "nextStep",
            "click .J-prev": "prevStep"
        },
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
            console.log("stepView3 close");
        },
        onShow: function(){
            this.delegateEvents();
            console.log("stepView3 show");
        }
    });

    return StepView3;

});