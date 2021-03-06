<div class="tab-trigger">
    <span class="trigger cur" data-role="trigger">图片广告</span>
    <span class="trigger" data-role="trigger">文字广告</span>
    <span class="trigger" data-role="trigger">图文广告</span>
    <span class="trigger" data-role="trigger">图文+描述</span>
</div>
<!--S:图片广告-->
<div class="tab-content" data-role="content">
    <div class="control-group">
        <label class="control-label" for="adv_name">广告名称：</label>
        <div class="controls">
            <input name="adv_name" type="text" class="field" size="40"><span class="unit">0/30</span>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label">上传图片：</label>
        <div class="controls">
            <form class="rel">
                <label for="testPic" class="btn btn-entry btn-small">选择并上传</label>
                <input type="file" id="testPic" name="testPic" class="file">
                <span class="unit">120×60像素，50k以内</span>
            </form>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="adv_link">广告链接：</label>
        <div class="controls">
            <input name="adv_link" type="text" class="field" size="40">
        </div>
    </div>
</div>
<!--E:图片广告-->
<!--S:文字广告-->
<div class="tab-content g-hide" data-role="content">
    <div class="control-group">
        <label class="control-label" for="adv_name">广告名称：</label>
        <div class="controls">
            <input name="adv_name" type="text" class="field" size="40"><span class="unit">0/30</span>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="adv_title">标题：</label>
        <div class="controls">
            <input type="text" name="adv_title" class="field" size="40"><span class="unit">0/30</span>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="adv_link">广告链接：</label>
        <div class="controls">
            <input name="adv_link" type="text" class="field" size="40">
        </div>
    </div>
</div>
<!--E:文字广告-->
<!--S:图文广告-->
<div class="tab-content g-hide" data-role="content">
    <div class="control-group">
        <label class="control-label" for="adv_name">广告名称：</label>
        <div class="controls">
            <input name="adv_name" type="text" class="field" size="40"><span class="unit">0/30</span>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="adv_title">标题：</label>
        <div class="controls">
            <input type="text" name="adv_title" class="field" size="40"><span class="unit">0/30</span>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label">上传图片：</label>
        <div class="controls">
            <input type="file" name=""><span class="unit">120×60像素，50k以内</span>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="adv_link">广告链接：</label>
        <div class="controls">
            <input name="adv_link" type="text" class="field" size="40">
        </div>
    </div>
</div>
<!--E:图文广告-->
<!--S:图文+描述-->
<div class="tab-content g-hide" data-role="content">
    <div class="control-group">
        <label class="control-label" for="adv_name">广告名称：</label>
        <div class="controls">
            <input name="adv_name" type="text" class="field"><span class="unit">0/30</span>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="adv_title">标题：</label>
        <div class="controls">
            <input type="text" name="adv_title" class="field" size="40"><span class="unit">0/30</span>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="adv_desc">描述：</label>
        <div class="controls">
            <input type="text" name="adv_desc" class="field" size="40">
        </div>
    </div>
    <div class="control-group">
        <label class="control-label">上传图片：</label>
        <div class="controls">
            <input type="file" name=""><span class="unit">120×60像素，50k以内</span>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="adv_link">广告链接：</label>
        <div class="controls">
            <input name="adv_link" type="text" class="field" size="40">
        </div>
    </div>
</div>
<!--E:图文+描述-->
<div class="form-action">
    <a href="#" class="J-prev btn">上一步</a>
    <a href="#" class="J-submit btn btn-primary">完成</a>
</div>