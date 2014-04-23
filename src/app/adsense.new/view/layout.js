/**
 * @author: biangang
 * @date: 2014/4/18
 * todo:
 * 1. 修改的时候也进这里 需要填数据
 */
define([
    "templates",
    "marionette",
    "underscore",
    "app/adsense.new/model/step1",
    "app/adsense.new/view/stepView1",
    "app/adsense.new/model/step2",
    "app/adsense.new/view/stepView2",
    "app/adsense.new/model/step3",
    "app/adsense.new/view/stepView3",
    "app/adsense.new/model/step4",
    "app/adsense.new/view/stepView4"
], function (tpl, Marionette, _, Step1, StepView1, Step2, StepView2, Step3, StepView3, Step4, StepView4) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["adsense_new_layout"],

        regions: {
            stepRegion: "#J-adsense-form"
        },

        currentStep: 0,

        onShow: function(){
            this.$processbar = this.$el.find(".processbar");
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
                }),
                step3: new StepView3({
                    model: new Step3()
                }),
                step4: new StepView4({
                    model: new Step4()
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
            this.setProcessbar(index);
        },

        nextView: function(){
            this.currentStep += 1;
            this.showViewByIndex(this.currentStep);
        },

        prevView: function(){
            this.currentStep -= 1;
            this.showViewByIndex(this.currentStep);
        },
        /*更新processbar*/
        setProcessbar: function(index){
            this.$processbar.find(".cur").removeClass("cur");
            this.$processbar.find("span").eq(index).addClass("cur");
        }

    });

    return Layout;

});