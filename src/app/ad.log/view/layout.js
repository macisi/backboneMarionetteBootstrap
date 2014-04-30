/**
 * @author: biangang
 * @date: 2014/4/29
 */
define([
    "baseLayout",
    "app/ad.log/view/logView",
    "app/ad.log/collection/logs"
], function (BaseLayout, LogView, Logs) {
    "use strict";

    var Layout = BaseLayout.extend({
        name: "adLog",

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