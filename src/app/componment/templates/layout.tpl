{{#if adposNew}}
<h2 class="subject-name">新建广告位</h2>
<div id="J-form"></div>
{{/if}}
{{#if adBrowse}}
<h2 class="subject-name">广告浏览日志</h2>
<div id="J-browse-detail"></div>
{{/if}}
{{#if adClick}}
<h2 class="subject-name">广告点击日志</h2>
<div id="J-click-detail"></div>
{{/if}}
{{#if businessDetail}}
    <h2 class="subject-name">商家消费明细</h2>
    <div id="J-detail-list"></div>
{{/if}}
{{#if adLog}}
<h2 class="subject-name">广告操作日志</h2>
<div id="J-log-list"></div>
{{/if}}
{{#if adManage}}
<h2 class="subject-name">广告管理</h2>
<div id="J-list"></div>
{{/if}}
{{#if adAudit}}
    <h2 class="subject-name">广告审核</h2>
    <div id="J-list"></div>
{{/if}}
{{#if adposManage}}
<h2 class="subject-name">广告位管理 <a href="#adpos/new" class="btn btn-entry btn-small ml10">新建广告位</a></h2>
<div id="J-adpos-list"></div>
{{/if}}
{{#if adsenseEdit}}
<h2 class="subject-name">修改广告 <a href="#ad/manage" class="ret">《返回广告管理</a></h2>
<div id="J-form"></div>
{{/if}}
{{#if adsenseManage}}
<h2 class="subject-name">广告管理 <a href="#adsense/new" class="btn btn-entry btn-small ml10">新建广告</a></h2>
<div id="J-adsense-list"></div>
{{/if}}
{{#if adsenseNew}}
<h2 class="subject-name">新建广告</h2>
<div class="processbar">
    <span>1.选择投放条件<i class="process-append"></i></span>
    <span><i class="process-prepend"></i>2.选择位置<i class="process-append"></i></span>
    <span><i class="process-prepend"></i>3.设置广告预算<i class="process-append"></i></span>
    <span><i class="process-prepend"></i>4.上传广告<i class="process-append"></i></span>
    <span><i class="process-prepend"></i>5.审核上线<i class="process-append"></i></span>
</div>
<div id="J-adsense-form"></div>
{{/if}}
{{#if financeDetail}}
<h2 class="subject-name">消费明细 <span class="tip">（累计达到500.00元以上可以申请免费快递发票；未满500.00元，可上门自取或快递到付）</span></h2>
<div id="J-finance-detail"></div>
{{/if}}
{{#if financeInfo}}
<h2 class="subject-name"><span id="J-type">修改</span>资料</h2>
<div id="J-info-form"></div>
{{/if}}
{{#if financeManage}}
<h2 class="subject-name">支付管理</h2>
<div id="J-finance-manage"></div>
{{/if}}
{{#if intro}}
<div id="J-intro"></div>
{{/if}}
{{#if pay}}
<h2 class="subject-name">确认并支付</h2>
<div id="J-pay" class="pay-page"></div>
{{/if}}
{{#if systemBusiness}}
<h2 class="subject-name">商家管理</h2>
<div id="J-detail"></div>
{{/if}}
{{#if businessEdit}}
<h2 class="subject-name">修改商家资料 <a href="#system/business" class="ret">《返回商家管理</a></h2>
<div id="J-form"></div>
{{/if}}
{{#if systemRole}}
<h2 class="subject-name">角色管理</h2>
<h3 class="sub-title">添加角色</h3>
<div id="J-role-form"></div>
<h3 class="sub-title">角色列表</h3>
<div id="J-role-list"></div>
{{/if}}
{{#if systemWorker}}
<h2 class="subject-name">工作人员管理</h2>
<h3 class="sub-title">添加工作人员</h3>
<div id="J-worker-form"></div>
<h3 class="sub-title">工作人员列表</h3>
<div id="J-worker-list"></div>
{{/if}}
{{#if systemBusinessGroup}}
<h2 class="subject-name">商家群管理</h2>
<h3 class="sub-title">添加商家群</h3>
<div id="J-form"></div>
<h3 class="sub-title">商家群列表</h3>
<div id="J-list"></div>
{{/if}}
{{#if systemUserGroup}}
<h2 class="subject-name">用户群管理</h2>
<h3 class="sub-title">添加用户群</h3>
<div id="J-form"></div>
<h3 class="sub-title">用户群列表</h3>
<div id="J-list"></div>
{{/if}}