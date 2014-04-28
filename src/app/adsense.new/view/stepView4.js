/**
 * @author: biangang
 * @date: 2014/4/19
 */
define([
    "templates",
    "underscore",
    "marionette",
    "app/componment/tabView",
    "app/componment/uploader"
], function (tpl, _, Marionette, TabView, uploader) {
    "use strict";

    var StepView4 = TabView.extend({
        template: tpl["adsense_new_step4"],
        ui: {
            "submit": ".J-submit",
            "prev": ".J-prev",
            "field": "input"
        },
        events: _.extend({
            "change input.file": "uploadImage"
        }, TabView.prototype.events),
        behaviors: {
            Submit: {},
            PrevStep: {},
            FormBinding: {}
        },
        initialize: function(){

        },
        uploadImage: function(e){
            e.preventDefault();
            console.log("submit to backend")
//            var form = $(e.target).parent("form")[0];
//            uploader(form, RPC.uploadImage, function(data){
//                console.log(data);
//            });
        },

        onShow: function(){
            this.delegateEvents();
        }
    });

    return StepView4;

});