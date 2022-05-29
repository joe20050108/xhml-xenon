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
                //style processing
                var style = [];
                for(var i = 0; i < attributes.length; i++) {
                    var y = 0;
                    /*for(var e = 0; e < attributes.length; e++) {
                        if(e > styles.length) {
                            break;
                        }
                        else if(e < styles.length) {
                            if(attributes[i].name == styles[e][1]) {
                                y = e;
                                break;
                            }
                        }
                    }*/
                    for(var e = 0; e < styles.length; e++) {
                        if(attributes[i].name == styles[e][1]) {
                            y = e;
                        }
                    }
                    var processedLine = controlProcessor.processLineXenon(attributes[i], styles[y]);
                    style.push(processedLine + ";");
                }
                var TextBox = document.createElement("input");
                //attribute processor
                var attrs = [];
                var processableAttribute = [];
                for(var i = 0; i < attributes.length; i++) {
                    var y = 0;
                    for(var e = 0; e < controlAttrs.length; e++) {
                        if(attributes[i].name == controlAttrs[e][1]) {
                            var newAttribute = controlProcessor.processAttribute(attributes[i], controlAttrs[e]);
                            TextBox.setAttribute(newAttribute[0], newAttribute[1]);
                            break;
                        }
                    }
                }
                TextBox.style = style.join("");
                //todo: handle attributes
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