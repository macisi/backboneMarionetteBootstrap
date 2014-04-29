<tr class="adsense_detail">
    <td colspan="5">
        <h5>广告详情</h5>
        <ul>
            <li title="{{position}}"><span class="label">位置:</span>{{position}}</li>
            <li title="{{city}}"><span class="label">地域:</span>{{city}}</li>
            <li title="{{gender}}"><span class="label">性别:</span>{{gender}}</li>
            <li title="{{industry}}"><span class="label">行业:</span>{{industry}}</li>
            <li title="{{category}}"><span class="label">品类:</span>{{category}}</li>
            <li title="{{group}}"><span class="label">人群:</span>{{group}}</li>
        </ul>
    </td>
    <td colspan="6">
        <ul style="margin-top: 24px">
            <li title="{{unitPrice}}"><span class="label">线上每点击付费：</span>{{unitPrice}}<span class="unit">(元/点击)</span></li>
            <li title="{{releaseDate}}"><span class="label">最近上线日期：</span>{{releaseDate}}</li>
        </ul>
    </td>
    <td colspan="6" class="preview">
        <h5>广告预览</h5>
        {{#if adv_img}}
            <div class="image">
                <img src="{{adv_img}}" alt=""/>
            </div>
        {{/if}}
        {{#if adv_title}}<p class="title">{{adv_title}}</p>{{/if}}
        {{#if adv_desc}}<p class="desc">{{adv_desc}}</p>{{/if}}
    </td>
</tr>