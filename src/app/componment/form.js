/**
 * @author: biangang
 * @date: 2014/4/18
 * @desc: form model with the predefined validate method & rules
 * @notice:
 * 1.每个从formModel继承的model必须有自己的validateMap
 */
define(["backbone"], function (Backbone) {
    "use strict";

    var FormModel = Backbone.Model.extend({
        rules: {
            required: {
                reg: /[\S]/,
                errorText: "必填"
            },
            range: {
                min: 0,
                max: 100,
                errorText: "超出范围"
            }
        },
        /*sample*/
        validateMap: {
//            "name": "required",
//            "price": ["required", "range"]
        },
        /*sample*/
        validate: function(attrs, rule){
            var validateError = false, reg, attr, max, min;

            _.some(this.validateMap, function(value, key){
                if (validateError) return true;
                if (!_.isArray(value)) {
                    value = [value];
                }
                attr = attrs[key];
                _.some(value, function(rule){
                    rule = this.rules[rule];
                    if (reg = rule.reg, reg) {
                        if (!reg.test(attr)) {
                            validateError = rule.errorText;
                            return true;
                        }
                    }
                    if(min = rule.min, min !== undefined) {
                        if (isNaN(attr) || attr < min) {
                            validateError = rule.errorText;
                            return true;
                        }
                    }
                    if(max = rule.max, max !== undefined) {
                        if (isNaN(attr) || attr > max) {
                            validateError = rule.errorText;
                            return true;
                        }
                    }
                }, this);

            }, this);

            if (validateError) {
                return validateError;
            }
        }
    });

    return FormModel;

});