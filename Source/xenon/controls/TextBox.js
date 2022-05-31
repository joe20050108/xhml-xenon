define([
    "xenon/controls/TextBox/styles",
    "xenon/controls/processor",
    "xenon/controls/TextBox/attributes",
], function(styles, controlProcessor, controlAttrs) {
    var TextBox = {
        //process a textbox control
        //SEE STACKPANEL FOR DOCUMENTATION AND COMMENTS
        process: function(control) {
            if(control.tagName == "TextBox" || control.tagName == "TEXTBOX" || control.tagName == "textbox") {
                var attributes = control.attributes;
                var TextBox = document.createElement("input");
                controlProcessor.processStyles(TextBox, attributes, styles);
                controlProcessor.processAttributes(TextBox, attributes, controlAttrs);
                //todo: handle attributes
                //attributes handled and handles well!
                TextBox.innerText = control.innerText;
                TextBox.type = "text";
                control.replaceWith(TextBox);
            }
        }
    }
    controlProcessor.registerControl([
        "TextBox", "TEXTBOX", "textbox",
        TextBox.process,
    ]);
    return TextBox;
})