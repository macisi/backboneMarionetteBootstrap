/**
 * @desc: 全局配置
 * @author: biangang
 * @date: 2014/4/25
 */
define([
    "underscore",
    "backbone",
    "marionette"
], function (_, Backbone, Marionette) {
    "use strict";

    //TODO: for test
    Backbone.emulateHTTP = true;
    Backbone.emulateJSON = true;

    //fix ie's console error
    if (typeof console == "undefined") {
        this.console = { log: function (msg) { alert(msg); } };
    }

    //TODO: global parse modify
    _.extend(Backbone.Collection.prototype, {
        parse: function(resp, options){
            if (resp.success) {
                return resp.content;
            }
        }
    });

    //加点模块载入动画效果
    _.extend(Marionette.Layout.prototype, {
        className: "layout out",
        onDomRefresh: function(){
            var _this = this;
            setTimeout(function(){
                _this.$el.removeClass("out");
            }, 50)
        }
    });
});