<div class="control-group">
    <label class="control-label" for="industry">行业：</label>
    <div class="controls">
        <select name="industry" id="industry"></select>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="sub_industry">二级行业：</label>
    <div class="controls">
        <select name="sub_industry" id="sub_industry"></select>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="">发票地址：</label>
    <div class="controls">
        <select name="provinceId" id="provinceId"></select>
        <select name="cityId" id="cityId"></select>
        <select name="districtId" id="districtId"></select>
        <input class="field" type="street" value="{{steet}}">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="invoice">发票抬头：</label>
    <div class="controls">
        <input class="field" name="invoice" id="invoice" value="{{invoice}}" type="text">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="postcode">邮编：</label>
    <div class="controls">
        <input class="field" type="text" id="postcode" name="postcode" value="{{postcode}}">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="name">姓名：</label>
    <div class="controls">
        <input class="field" type="text" id="name" name="name" value="{{name}}">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="mobile">手机：</label>
    <div class="controls">
        <input class="field" name="mobile" id="mobile" value="{{mobile}}" type="text">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="qq">QQ:</label>
    <div class="controls">
        <input class="field" type="text" id="qq" name="qq" value="{{qq}}">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="role">营销人员:</label>
    <div class="controls">
        <label class="radio" for="role"><input type="radio" name="role" value="商家">商家</label>
        <label class="radio" for="role"><input type="radio" name="role" value="无权限人员">无权限人员</label>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="sales">营销人员:</label>
    <div class="controls">
        <input class="field" type="text" id="sales" name="sales" value="{{sales}}">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="contact">是否联系:</label>
    <div class="controls">
        <label class="radio" for="contact"><input type="radio" name="contact" value="是">是</label>
        <label class="radio" for="contact"><input type="radio" name="contact" value="否">否</label>
    </div>
</div>
<div class="form-action">
    <a class="btn" href="#">返 回</a>
    <a class="btn btn-primary" href="#">确 定</a>
</div>