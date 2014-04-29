/**
 * Created by biangang on 2014/4/16.
 */
define(function(require){
    "use strict";

    var Handlebars = require("handlebars");

    var tpl = {
        "nav_nav": Handlebars.compile(require("text!app/nav/templates/nav.tpl"))
        ,"system_role_layout": Handlebars.compile(require("text!app/system.role/templates/layout.tpl"))
        ,"system_role_role": Handlebars.compile(require("text!app/system.role/templates/role.tpl"))
        ,"system_role_list": Handlebars.compile(require("text!app/system.role/templates/list.tpl"))
        ,"system_role_table": Handlebars.compile(require("text!app/system.role/templates/table.tpl"))
        ,"system_worker_layout": Handlebars.compile(require("text!app/system.worker/templates/layout.tpl"))
        ,"system_worker_worker": Handlebars.compile(require("text!app/system.worker/templates/worker.tpl"))
        ,"system_worker_list": Handlebars.compile(require("text!app/system.worker/templates/list.tpl"))
        ,"system_worker_table": Handlebars.compile(require("text!app/system.worker/templates/table.tpl"))
        ,"system_business_layout": Handlebars.compile(require("text!app/system.business/templates/layout.tpl"))
        ,"system_business_table": Handlebars.compile(require("text!app/system.business/templates/table.tpl"))
        ,"system_business_tr": Handlebars.compile(require("text!app/system.business/templates/tr.tpl"))
        ,"ad_log_layout": Handlebars.compile(require("text!app/ad.log/templates/layout.tpl"))
        ,"ad_log_table": Handlebars.compile(require("text!app/ad.log/templates/table.tpl"))
        ,"ad_log_tr": Handlebars.compile(require("text!app/ad.log/templates/tr.tpl"))
        ,"ad_click_layout": Handlebars.compile(require("text!app/ad.click/templates/layout.tpl"))
        ,"ad_click_table": Handlebars.compile(require("text!app/ad.click/templates/table.tpl"))
        ,"ad_click_tr": Handlebars.compile(require("text!app/ad.click/templates/tr.tpl"))
        ,"ad_browse_layout": Handlebars.compile(require("text!app/ad.browse/templates/layout.tpl"))
        ,"ad_browse_table": Handlebars.compile(require("text!app/ad.browse/templates/table.tpl"))
        ,"ad_browse_tr": Handlebars.compile(require("text!app/ad.browse/templates/tr.tpl"))
        ,"adpos_new_layout": Handlebars.compile(require("text!app/adpos.new/templates/layout.tpl"))
        ,"adpos_new_form": Handlebars.compile(require("text!app/adpos.new/templates/form.tpl"))
        ,"adsense_edit_layout": Handlebars.compile(require("text!app/adsense.edit/templates/layout.tpl"))
        ,"adsense_edit_form": Handlebars.compile(require("text!app/adsense.edit/templates/form.tpl"))
        ,"adpos_manage_layout": Handlebars.compile(require("text!app/adpos.manage/templates/layout.tpl"))
        ,"adpos_manage_list": Handlebars.compile(require("text!app/adpos.manage/templates/list.tpl"))
        ,"adpos_manage_table": Handlebars.compile(require("text!app/adpos.manage/templates/table.tpl"))
        ,"adpos_manage_detailrow": Handlebars.compile(require("text!app/adpos.manage/templates/detailrow.tpl"))
        ,"ad_manage_layout": Handlebars.compile(require("text!app/ad.manage/templates/layout.tpl"))
        ,"ad_manage_list": Handlebars.compile(require("text!app/ad.manage/templates/list.tpl"))
        ,"ad_manage_table": Handlebars.compile(require("text!app/ad.manage/templates/table.tpl"))
        ,"ad_manage_detailrow": Handlebars.compile(require("text!app/ad.manage/templates/detailrow.tpl"))


        ,"adsense_new_layout": Handlebars.compile(require("text!app/adsense.new/templates/layout.tpl"))
        ,"adsense_new_step1": Handlebars.compile(require("text!app/adsense.new/templates/step1.tpl"))
        ,"adsense_new_step2": Handlebars.compile(require("text!app/adsense.new/templates/step2.tpl"))
        ,"adsense_new_step3": Handlebars.compile(require("text!app/adsense.new/templates/step3.tpl"))
        ,"adsense_new_step4": Handlebars.compile(require("text!app/adsense.new/templates/step4.tpl"))
        ,"adsense_manage_layout": Handlebars.compile(require("text!app/adsense.manage/templates/layout.tpl"))
        ,"adsense_manage_list": Handlebars.compile(require("text!app/adsense.manage/templates/list.tpl"))
        ,"adsense_manage_table": Handlebars.compile(require("text!app/adsense.manage/templates/table.tpl"))
        ,"adsense_manage_detailrow": Handlebars.compile(require("text!app/adsense.manage/templates/detailrow.tpl"))
        ,"adsense_manage_addialog": Handlebars.compile(require("text!app/adsense.manage/templates/addialog.tpl"))
        ,"finance_info_layout": Handlebars.compile(require("text!app/finance.info/templates/layout.tpl"))
        ,"finance_info_form": Handlebars.compile(require("text!app/finance.info/templates/form.tpl"))
        ,"finance_detail_layout": Handlebars.compile(require("text!app/finance.detail/templates/layout.tpl"))
        ,"finance_detail_detail": Handlebars.compile(require("text!app/finance.detail/templates/detail.tpl"))
        ,"finance_manage_layout": Handlebars.compile(require("text!app/finance.manage/templates/layout.tpl"))
        ,"finance_manage_manage": Handlebars.compile(require("text!app/finance.manage/templates/manage.tpl"))
        ,"pay_layout": Handlebars.compile(require("text!app/pay/templates/layout.tpl"))
        ,"pay_pay": Handlebars.compile(require("text!app/pay/templates/pay.tpl"))
        ,"intro_layout": Handlebars.compile(require("text!app/intro/templates/layout.tpl"))
        ,"intro_intro": Handlebars.compile(require("text!app/intro/templates/intro.tpl"))
    };

    return tpl;
});