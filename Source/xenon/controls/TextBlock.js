define([
    "xenon/controls/TextBlock/styles",
    "xenon/controls/TextBlock/attributes",
    "xenon/controls/processor",
], function(styles, controlAttrs, controlProcessor) {
    var TextBlock = {
        //process function
        process: function(control) {
            var attributes = control.attributes;
            var TextBlock = document.createElement("textarea");
            controlProcessor.processStyles(TextBlock, attributes, styles);
            controlProcessor.processAttributes(TextBlock, attributes, controlAttrs);
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