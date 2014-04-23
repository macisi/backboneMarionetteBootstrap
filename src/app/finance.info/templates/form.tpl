<div class="control-group">
    <label class="control-label" for="industryId"><em class="required">*</em>行业</label>
    <div class="controls">
        <select name="industryId" id="industryId">
            <option value="">请选择行业</option>
            <option value="001">亲子</option>
        </select>
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="invoice"><em class="required">*</em>发票抬头</label>
    <div class="controls">
        <input type="text" name="invoice" id="invoice" size="50" class="field">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="provience"><em class="required">*</em>发票地址</label>
    <div class="controls">
        <select name="provience" id="provience">
            <option value=""></option>
        </select>
        <select name="city" id="city">
            <option value=""></option>
        </select>
        <select name="area" id="area">
            <option value=""></option>
        </select>
        <input type="text" name="street" class="field" value="{{street}}">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="postcode"><em class="required">*</em>邮编</label>
    <div class="controls">
        <input type="text" name="postcode" id="postcode" size="50" class="field" value="{{postcode}}">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="name"><em class="required">*</em>姓名</label>
    <div class="controls">
        <input type="text" name="name" id="name" size="50" class="field" value="{{name}}">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="mobile"><em class="required">*</em>手机</label>
    <div class="controls">
        <input type="text" name="mobile" id="mobile" size="50" class="field" value="{{mobile}}">
    </div>
</div>
<div class="control-group">
    <label class="control-label" for="qq">qq</label>
    <div class="controls">
        <input type="text" name="qq" id="qq" size="50" class="field" value="{{qq}}">
    </div>
</div>
<div class="form-action">
    <a href="#" class="btn btn-primary">确定</a>
</div>