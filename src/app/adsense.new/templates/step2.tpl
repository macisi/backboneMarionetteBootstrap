<div class="control-group">
    <label class="control-label" for="startDate">开始时间：</label>
    <div class="controls">
        <input type="text" name="startDate" id="startDate" class="field">
    </div>
    <label class="control-label" for="endDate">结束时间：</label>
    <div class="controls">
        <label class="radio">
            <input type="radio">无
        </label>
        <label class="radio">
            <input type="radio">
            <input type="text" name="endDate" class="field">
        </label>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="area">地域:</label>
    <div class="controls">
        <label class="radio"><input type="radio">不限</label>
        <label class="radio">
            <input type="text" name="area" class="field">
            <select name="provinceId">
                <option value="">请选择省市/其它</option>
            </select>
            <select name="cityId">
                <option value="">请选择城市</option>
            </select>
            <select name="districtId">
                <option value="">请选择区县</option>
            </select>
        </label>
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
        <select name="group" id="group">
            <option value="">请选择人群</option>
        </select>
    </div>
</div>
<div class="form-action">
    <a href="#" class="J-prev btn">上一步</a>
    <a href="#" class="J-next btn btn-primary">下一步</a>
</div>