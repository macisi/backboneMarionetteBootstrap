/**
 * Created by biangang on 2014/4/16.
 */
define(function(require){
    "use strict";

    var Handlebars = require("handlebars");

    var tpl = {
        "nav_nav": Handlebars.compile(require("text!app/nav/templates/nav.tpl")),
        "system_role_layout": Handlebars.compile(require("text!app/system.role/templates/layout.tpl")),
        "system_role_role": Handlebars.compile(require("text!app/system.role/templates/role.tpl")),
        "system_role_list": Handlebars.compile(require("text!app/system.role/templates/list.tpl")),
        "system_role_table": Handlebars.compile(require("text!app/system.role/templates/table.tpl")),
        "system_worker_layout": Handlebars.compile(require("text!app/system.worker/templates/layout.tpl")),
        "system_worker_worker": Handlebars.compile(require("text!app/system.worker/templates/worker.tpl")),
        "system_worker_list": Handlebars.compile(require("text!app/system.worker/templates/list.tpl")),
        "system_worker_table": Handlebars.compile(require("text!app/system.worker/templates/table.tpl")),
        "adsense_new_layout": Handlebars.compile(require("text!app/adsense.new/templates/layout.tpl")),
        "adsense_new_step1": Handlebars.compile(require("text!app/adsense.new/templates/step1.tpl")),
        "adsense_new_step2": Handlebars.compile(require("text!app/adsense.new/templates/step2.tpl")),
        "adsense_new_step3": Handlebars.compile(require("text!app/adsense.new/templates/step3.tpl")),
        "adsense_new_step4": Handlebars.compile(require("text!app/adsense.new/templates/step4.tpl"))
    };

    return tpl;
});