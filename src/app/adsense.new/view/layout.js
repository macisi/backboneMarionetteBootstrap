/**
 * Created by biangang on 2014/4/18.
 */
define([
    "templates",
    "marionette",
    "underscore",
    "app/adsense.new/model/step1",
    "app/adsense.new/view/stepView1",
    "app/adsense.new/model/step2",
    "app/adsense.new/view/stepView2"
], function (tpl, Marionette, _, Step1, StepView1, Step2, StepView2) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["adsense_new_layout"],

        regions: {
            stepRegion: "#J-adsense-form"
        },

        currentStep: 0,

        onShow: function(){
            this.showViewByIndex(this.currentStep);
        },

        initialize: function(){
            //每一步就按照index来取了
            var views = {
                step1: new StepView1({
                    model: new Step1()
                }),
                step2: new StepView2({
                    model: new Step2()
                })
            };

            this.container = new Backbone.ChildViewContainer();

            _.each(views, function(view, key){
                this.container.add(view, key);
                this.listenTo(view, "next", this.nextView);
                this.listenTo(view, "prev", this.prevView);
            }, this);
        },

        showViewByIndex: function(index){
            this.stepRegion.show(this.container.findByIndex(index));
        },

        nextView: function(){
            this.currentStep += 1;
            this.showViewByIndex(this.currentStep);
        },

        prevView: function(){
            this.currentStep -= 1;
            this.showViewByIndex(this.currentStep);
        }

    });

    return Layout;

});