/**
 * @desc: 不依赖flash的异步文件上传
 * @author: biangang
 * @date: 2014/4/25
 */
define(["underscore", "jquery"], function (_, $) {
    "use strict";

    /**
     * @param form: form element;
     * @param action_url: upload url;
     * @param callback: callback after uploaded;
     */
    function uploader(form, action_url, callback) {

        // Create the iframe...
        var $iframe = $("<iframe id='upload_iframe' name='upload_iframe' width='0' height='0' border='0' style='width:0;height:0;border:0 none;'>");

        // Add to document...
        $iframe.insertAfter(form);
        window.frames["upload_iframe"].name = "upload_iframe";

        $iframe.on("load", function(){
            $iframe.off("load");
            var iframe = $iframe[0], content;

            try {
                if (iframe.contentWindow) {
                    content = iframe.contentWindow.document.body ? iframe.contentWindow.document.body.innerHTML : null;
                } else if (iframe.contentDocument) {
                    content = iframe.contentDocument.document.body?iframe.contentDocument.document.body.innerHTML : null;
                }
            } catch(e) {
                throw(e);
            }

            callback(content);

            setTimeout(function(){
                $iframe.remove();
            }, 250);
        });

        var prop = {
            "target": "upload_iframe",
            "action": action_url,
            "method": "post",
            "enctype": "multipart/form-data",
            "encoding": "multipart/form-data"
        };
        _.forEach(prop, function(value, key){
            form.setAttribute(key, value);
        });

        form.submit();
    }

    return uploader;
});