/**
 * @author: biangang
 * @date: 2014/4/28
 */
define(["marionette"], function (Marionette) {
    "use strict";

    var Behaviors = {
        //下一步
        NextStep: Marionette.Behavior.extend({
            events: {
                "click @ui.next": "nextStep"
            },

            nextStep: function(e){
                e.preventDefault();
                var model = this.view.model;
                if (model.isValid()) {
                    //todo: maybe send reqeuest
                    console.log("next");
                    this.view.trigger("next");
                } else {
                    //todo: showError
                    console.log(model.validationError);
                }
            }
        }),
        //上一步
        PrevStep: Marionette.Behavior.extend({
            events: {
                "click @ui.prev": "prevStep"
            },

            prevStep: function(e){
                e.preventDefault();
                this.view.trigger("prev");
            }
        }),
        //submit
        Submit: Marionette.Behavior.extend({
            events: {
                "click @ui.submit": "submit"
            },

            submit: function(e){
                e.preventDefault();
                var model = this.view.model;
                if (model.isValid()) {
                    //todo: maybe send reqeuest
                    console.log("submit");
                } else {
                    //todo: showError
                    console.log(model.validationError);
                }
            }
        }),
        //Form binding
        FormBinding: Marionette.Behavior.extend({
            events: {
                "change @ui.field": "update"
            },

            update: function(e){
                console.log(e.target.name, e.target.value);
                this.view.model.set(e.target.name, e.target.value);
            }
        })
    };

    window.Behaviors = Behaviors;

});