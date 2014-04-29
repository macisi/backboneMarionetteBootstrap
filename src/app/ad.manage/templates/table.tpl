<div class="filters">
    <p>
        时间段：<input name="startDate" class="field" type="text" data-bind="datepicker" placeholder="开始时间"> -
        <input name="endDate" class="field" type="text" data-bind="datepicker" placeholder="结束时间">
        <input name="id" type="text" class="field" placeholder="广告ID">
        <input name="nickname" type="text" class="field" placeholder="用户昵称">
        <input name="user" type="text" class="field" placeholder="操作者">
        <select name="concacted">
            <option>广告状态</option>
            <option>是</option>
            <option>否</option>
        </select>
        <select name="concacted">
            <option>审核状态</option>
            <option>是</option>
            <option>否</option>
        </select>
        <a href="#" class="btn btn-small btn-primary" id="J-do-search">搜索</a>
    </p>
</div>
<table class="adsense-list mt10 table">
    <thead>
    <tr>
        <th>ID</th>
        <th>商家昵称</th>
        <th>商家公司名称<i class="icon-explain"></i></th>
        <th>广告名称</th>
        <th>投放时间</th>
        <th width="70">每点击付费<span class="unit">(元/点击)</span></th>
        <th width="60">广告预算<span class="unit">(元)</span></th>
        <th>曝光次数</th>
        <th>曝光用户数</th>
        <th>点击量</th>
        <th width="70">已付款金额<span class="unit">(元)</span></th>
        <th>广告状态</th>
        <th>审核状态</th>
        <th>备注</th>
        <th>操作者</th>
        <th>当前竞价排序</th>
        <th width="60">操作</th>
    </tr>
    </thead>
    <tbody></tbody>
</table>