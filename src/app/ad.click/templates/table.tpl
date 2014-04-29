<div class="filters">
    <p>
        时间段：<input name="startDate" class="field" type="text" data-bind="datepicker" placeholder="开始时间"> -
        <input name="endDate" class="field" type="text" data-bind="datepicker" placeholder="结束时间">
        <input name="sid" type="text" class="field" placeholder="用户sid">
        <input name="uid" type="text" class="field" placeholder="用户uid">
        <input name="nickname" type="text" class="field" placeholder="用户昵称">
        <input name="ip" type="text" class="field" placeholder="用户IP">
    </p>
    <p>
        价格范围：
        <input name="range1" type="text" class="field"> -
        <input name="range2" type="text" class="field">
        <input name="id/nickname" type="text" class="field" placeholder="广告ID/商家昵称">
        <input name="sign" type="text" class="field" placeholder="广告位标识">
        <a href="#" class="btn btn-small btn-primary" id="J-do-search">搜索</a>
    </p>
</div>
<table class="mt10 table">
    <thead>
    <tr>
        <th>ID</th>
        <th width="60">创建时间</th>
        <th width="60">用户sid</th>
        <th width="60">用户uid</th>
        <th width="60">用户昵称</th>
        <th width="60">匹配类型</th>
        <th width="80">广告位标识</th>
        <th>广告id</th>
        <th width="80">商家名称</th>
        <th width="60">商家投放条件</th>
        <th width="65">用户匹配项</th>
        <th width="65">用户相似度</th>
        <th width="60">点击参数</th>
        <th width="60">点击费用<span class="unit">(元/点击)</span></th>
    </tr>
    </thead>
    <tbody></tbody>
</table>