<tr class="adsense_detail">
    <td colspan="5">
        <h5>广告位详情</h5>
        <ul style="height: auto;">
            <li title="{{name}}"><span class="label">广告位名称:</span>{{name}}</li>
            <li title="{{sign}}"><span class="label">广告位唯一标识:</span>{{sign}}</li>
            <li title="{{arg}}"><span class="label">统计参数:</span>{{arg}}</li>
            <li title="{{createDate}}"><span class="label">创建时间:</span>{{createDate}}</li>
            <li title="{{count}}"><span class="label">轮播次数:</span>{{count}}次</li>
        </ul>
    </td>
    <td colspan="7" class="preview">
        <h5>广告预览</h5>
        {{#if preview}}
        <div class="image">
            <img src="{{preview}}" alt=""/>
        </div>
        {{/if}}
    </td>
</tr>