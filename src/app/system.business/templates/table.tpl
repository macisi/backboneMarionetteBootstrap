<div class="filters">
    <p>
        时间段：<input name="startDate" class="field" type="text" data-bind="datepicker" placeholder="开始时间"> -
        <input name="endDate" class="field" type="text" data-bind="datepicker" placeholder="结束时间">
        <input name="nickname" type="text" class="field" placeholder="用户昵称">
        <input name="ip" type="text" class="field" placeholder="营销人员">
        <select name="concacted">
            <options>是否联系</options>
            <options>是</options>
            <options>否</options>
        </select>
        <a href="#" class="btn btn-small btn-primary" id="J-do-search">搜索</a>
    </p>
</div>
<table class="mt10 table">
    <thead>
    <tr>
        <th>ID</th>
        <th width="60">商家昵称</th>
        <th width="80">IP</th>
        <th>商家公司名称</th>
        <th>账户总充值金额<span class="unit">(元)</span></th>
        <th>账户余额<span class="unit">(元)</span></th>
        <th>已付款金额<span class="unit">(元)</span></th>
        <th>充值次数</th>
        <th>广告上线天数<span class="unit">(天)</span></th>
        <th>平均转化率</th>
        <th>上次转化率</th>
        <th>是否通过</th>
        <th>分配人员</th>
        <th>营销人员</th>
        <th>是否联系</th>
        <th width="120">备注</th>
        <th width="70">操作</th>
    </tr>
    </thead>
    <tbody></tbody>
</table>