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
        "adsense_new_step4": Handlebars.compile(require("text!app/adsense.new/templates/step4.tpl")),
        "adsense_manage_layout": Handlebars.compile(require("text!app/adsense.manage/templates/layout.tpl")),
        "adsense_manage_list": Handlebars.compile(require("text!app/adsense.manage/templates/list.tpl")),
        "adsense_manage_table": Handlebars.compile(require("text!app/adsense.manage/templates/table.tpl")),
        "adsense_manage_detailrow": Handlebars.compile(require("text!app/adsense.manage/templates/detailrow.tpl")),
        "adsense_manage_addialog": Handlebars.compile(require("text!app/adsense.manage/templates/addialog.tpl")),
        "finance_info_layout": Handlebars.compile(require("text!app/finance.info/templates/layout.tpl")),
        "finance_info_form": Handlebars.compile(require("text!app/finance.info/templates/form.tpl")),
        "finance_detail_layout": Handlebars.compile(require("text!app/finance.detail/templates/layout.tpl")),
        "finance_detail_detail": Handlebars.compile(require("text!app/finance.detail/templates/detail.tpl")),
        "finance_manage_layout": Handlebars.compile(require("text!app/finance.manage/templates/layout.tpl")),
        "finance_manage_manage": Handlebars.compile(require("text!app/finance.manage/templates/manage.tpl"))
    };

    return tpl;
});