/**
 * Created by biangang on 2014/4/22.
 */
define(["backbone"], function(Backbone){
    "use strict";

    var Pos = Backbone.Model.extend({
        defaults: {
            id: "",
            device: "",   //用户上网终端
            position: "",    //广告位置
            type: "",    //广告类型
            replace: "",    //精准广告覆盖类型
            outlink: "", //是否允许外链
            logo: "",    //是否显示logo
            imageSize: "",  //图片尺寸
            pv: "",    //日均曝光量
            minPrice: "",    //广告位每点击底价
            status: "",    //状态

            name: "", //广告名称
            sign: "", //唯一标识
            arg: "", //统计参数
            createDate: "", //创建时间
            count: "", //轮播次数,
            preview: ""//广告位预览地址
        }
    });

    return Pos;

});