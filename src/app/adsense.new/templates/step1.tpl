<div class="inline-control bottom-divide pb10">
    <div class="control-group">
        <label class="control-label" for="startDate">开始时间：</label>
        <div class="controls">
            <input type="text" name="startDate" id="startDate" data-bind="datepicker" class="field">
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="endDate">结束时间：</label>
        <div class="controls">
            <label class="radio">
                <input type="radio">无
            </label>
            <label class="radio">
                <input type="radio">
            </label>
            <input type="text" name="endDate" class="field">
        </div>
    </div>
</div>
<p class="pl10"><b>目标用户：</b></p>
<div class="control-group">
    <label class="control-label" for="area">地域：</label>
    <div class="controls">
        <label class="radio"><input type="radio">不限</label>
        <label class="radio">
            <input type="text" name="area" class="field">
        </label>
        <select name="provinceId">
            <option value="">请选择省市/其它</option>
        </select>
        <select name="cityId">
            <option value="">请选择城市</option>
        </select>
        <select name="districtId">
            <option value="">请选择区县</option>
        </select>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="gender">性别：</label>
    <div class="controls">
        <label class="radio"><input type="radio" name="gender">不限</label>
        <label class="radio"><input type="radio" name="gender" value="female">女性</label>
        <label class="radio"><input type="radio" name="gender" value="male">男性</label>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="age">年龄：</label>
    <div class="controls">
        <select name="age" id="age">
            <option value="">请选择年龄</option>
        </select>
        <span class="unit">如果选择的用户数偏少，可以选择不限年龄</span>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="industry">行业：</label>
    <div class="controls">
        <select name="industry" id="industry">
            <option value="">请选择行业</option>
        </select>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="category">品类：</label>
    <div class="controls">
        <select name="category" id="category">
            <option value="">请选择品类</option>
        </select>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="group">人群：</label>
    <div class="controls">
        <label class="checkbox"><input type="checkbox" name="group" value="不限">不限</label>
        <label class="checkbox"><input type="checkbox" name="group" value="备孕">备孕</label>
        <label class="checkbox"><input type="checkbox" name="group" value="孕早期">孕早期</label>
        <label class="checkbox"><input type="checkbox" name="group" value="孕中期">孕中期</label>
        <label class="checkbox"><input type="checkbox" name="group" value="孕晚期">孕晚期</label>
        <label class="checkbox"><input type="checkbox" name="group" value="新生儿">新生儿</label>
        <label class="checkbox"><input type="checkbox" name="group" value="婴儿(2-12月)">婴儿(2-12月)</label>
        <label class="checkbox"><input type="checkbox" name="group" value="幼儿(1-3岁)">幼儿(1-3岁)</label>
        <label class="checkbox"><input type="checkbox" name="group" value="学龄前(3-6岁)">学龄前(3-6岁)</label>
        <div class="tip">
            已经有<b class="highlight">8</b>个同行选择了这个用户群，估计这个用户群有<b class="highlight">120</b>人
        </div>
    </div>
</div>

<div class="form-action">
    <a href="#" class="J-next btn btn-primary">下一步</a>
</div>