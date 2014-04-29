/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "marionette",
    "templates",
    "app/ad.log/view/logView",
    "app/ad.log/collection/logs"
], function (Marionette, tpl, LogView, Logs) {
    "use strict";

    var Layout = Marionette.Layout.extend({

        template: tpl["ad_log_layout"],

        regions: {
            logDetail: "#J-log-list"
        },

        onShow: function(){
            this.logDetail.show(new LogView({
                collection: new Logs()
            }));
        }

    });

    return Layout;
});