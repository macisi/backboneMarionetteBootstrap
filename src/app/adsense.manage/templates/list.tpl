<td>{{id}}</td>
<td>{{name}}</td>
<td>{{startDate}} - {{endDate}}</td>
<td>{{unitPrice}}</td>
<td>{{budget}}</td>
<td>{{count}}</td>
<td>{{views}}</td>
<td>{{click}}</td>
<td>{{payed}}</td>
<td>{{ad_status}}</td>
<td>{{audit_status}}审核状态</td>
<td>{{remark}}</td>
<td>{{rank}}</td>
<td>
    <div>
        <a href="#" class="J-add-price">加价</a>
        <a href="#" class="J-update-dailyBudget">调整每天预算</a>
    </div>
    <div>
        <a href="#adsense/new?id={{id}}">修改</a>
        <a href="#" class="J-update-totalBudget">调整总预算</a>
        {{#if online}}<a href="#" class="J-suspend">暂停</a>{{/if}}
    </div>
</td>