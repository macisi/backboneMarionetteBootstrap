/**
 * @author: biangang
 * @date: 2014/4/29
 * @desc: 带有filter、分页的公共列表view
 * @notice:
 * 1. 这里用了placeholder的插件，去表单值的时候不要用原生的node.value方法，用jquery的val()去取
 */
define(["marionette", "pikaday", "placeholder"], function (Marionette, Pikaday) {
    "use strict";

    var ListView = Marionette.CompositeView.extend({
        events: {
            "click #J-do-search": "doSearch"
        },
        onShow: function(){
            this.delegateEvents();
            var _this = this;
            this.pickers = [];
            this.$("input[data-bind='datepicker']").each(function(){
                _this.pickers.push(new Pikaday({
                    field: this
                }));
            });
            this.$("input[placeholder]").placeholder();
            this.$filters = this.$el.find("[name]");
        },
        onClose: function(){
            _.forEach(this.pickers, function(picker){
                picker.destroy();
            });
        },
        /*根据filter条件搜索*/
        doSearch: function(e){
            e.preventDefault();
            this.collection.fetch({
                data: this.getFilterResult(),
                reset: true
            });
        },
        getFilterResult: function(){
            var ret = {};
            this.$filters.each(function(){
                ret[this.name] = $(this).val();
            });
            return ret;
        }
    });

    return ListView;
});