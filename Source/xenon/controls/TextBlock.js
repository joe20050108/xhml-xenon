define([
    "xenon/controls/TextBlock/styles",
    "xenon/controls/TextBlock/attributes",
    "xenon/controls/processor",
], function(styles, controlAttrs, controlProcessor) {
    var TextBlock = {
        //process function
        process: function(control) {
            var style = [];
            var attributes = control.attributes;
            for(var i = 0; i < attributes.length; i++) {
                var y = 0;
                for(var e = 0; e < styles.length; e++) {
                    if(attributes[i].name == styles[e][1]) {
                        y = e;
                    }
                }
                var processedLine = controlProcessor.processLineXenon(attributes[i], styles[y]);
                style.push(processedLine + ";");
            }
            var TextBlock = document.createElement("textarea");
            var attrs = [];
            var processableAttribute = [];
            for(var i = 0; i < attributes.length; i++) {
                var y = 0;
                for(var e = 0; e < controlAttrs.length; e++) {
                    if(attributes[i].name == controlAttrs[e][1]) {
                        var newAttribute = controlProcessor.processAttribute(attributes[i], controlAttrs[e]);
                        TextBlock.setAttribute(newAttribute[0], newAttribute[1]);
                        break;
                    }
                }
            }
            TextBlock.style = style.join("");
            TextBlock.innerHTML = control.innerHTML;
            TextBlock.readOnly = true;
            control.replaceWith(TextBlock);
        }
    }
    controlProcessor.registerControl([
        "TEXTBLOCK","textblock","TextBlock",
        //default action for any element matching the above three tags
        TextBlock.process,
    ]);
    return TextBlock;
});