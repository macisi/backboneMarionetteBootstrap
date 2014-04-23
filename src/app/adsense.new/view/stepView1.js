/**
 * @author: biangang
 * @date: 2014/4/18
 */
define([
    "templates",
    "marionette"
], function (tpl, Marionette) {
    "use strict";

    var StepView2 = Marionette.ItemView.extend({
        template: tpl["adsense_new_step1"],
        events: {
            "change input": "update",
            "click .J-next": "nextStep"
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