/**
 * @author: biangang
 * @date: 2014/4/29
 */
define(["marionette", "templates"], function (Marionette, tpl) {
    "use strict";

    var BaseLayout = Marionette.Layout.extend({
        template: tpl["componment_layout"],

        templateHelpers: function(){
            var ret = {};
            ret[this.name] = true;
            return ret;
        }
    });

    return BaseLayout;
});