/**
 * @author: biangang
 * @date: 2014/4/17
 */
define(["backbone"], function(Backbone){
    "use strict";

    var List = Backbone.Model.extend({
        defaults: {
            "id": "",
            "name": "", //用户群名称
            "category": "", //用户群类目
            "type": "", //匹配类型
            "prop": "", //关联用户属性
            "rule": "", //规则
            "threshold": "", //阈值
            "count": "" //标签次数
        }
    });

    return List;

});