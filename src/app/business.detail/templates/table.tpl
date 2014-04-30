<div class="filters">
    <p>
        时间段： <input name="startDate" class="field" type="text" data-bind="datepicker" placeholder="开始时间"> -
        <input name="endDate" class="field" type="text" data-bind="datepicker" placeholder="结束时间">
        <input name="ad_id" type="text" class="field" placeholder="广告ID/商家昵称">
        <input name="user" type="text" class="field" placeholder="操作者">
        <input name="deliveryId" type="text" class="field" placeholder="快递单号">
        <a href="#" class="btn btn-small btn-primary" id="J-do-search">搜索</a>
    </p>
</div>
<table class="mt10 table">
    <thead>
    <tr>
        <th>ID</th>
        <th>商家昵称</th>
        <th>广告ID</th>
        <th>广告名称</th>
        <th>日期</th>
        <th>消费金额<span class="unit">(元)</span></th>
        <th>操作者</th>
        <th>发票状态</th>
        <th>快递单号</th>
        <th width="60">操作</th>
    </tr>
    </thead>
    <tbody></tbody>
</table>