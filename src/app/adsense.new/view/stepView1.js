/**
 * @author: biangang
 * @date: 2014/4/18
 */
define([
    "templates",
    "marionette",
    "calendar"
], function (tpl, Marionette, showcalendar) {
    "use strict";

    var StepView2 = Marionette.ItemView.extend({
        template: tpl["adsense_new_step1"],
        events: {
            "change input": "update",
            "click .J-next": "nextStep",
            "click input[data-bind='datepicker']": "setDate"
        },
        initialize: function(){

        },
        update: function(e){
            this.model.set(e.target.name, e.target.value);
        },
        setDate: function(e){
            showcalendar(e, 0, null, 0, 0, function(date){
            });
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
        onClose: function(){
            console.log("stepView1 close");
        },
        onShow: function(){
            this.delegateEvents();
            console.log("stepView1 show");
        }
    });

    return StepView2;

});