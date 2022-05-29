define([
    "xenon/controls/StackPanel/styles",
    "xenon/controls/StackPanel/attributes",
    "xenon/controls/processor",

    //going to need to use the fucking annoying stylesheet compilation stack
], function(styles, controlAttrs, controlProcessor) {
    var StackPanel = {
        //process a control directed to it
        process: function(control) {
            //style processing
            var style = [];
            if(control.tagName == "STACKPANEL" || control.tagName == "StackPanel" || control.tagName == "stackpanel") {
                var attributes = control.attributes;
                //process stylesheet attributes
                for(var i = 0; i < attributes.length; i++) {
                    var y = 0;
                    //align the two properties
                    /* i = attribute
                    y = attribute's matching property
                    */
                    //align the two
                    for(var e = 0; e < styles.length; e++) {
                        if(attributes[i].name == styles[e][1]) {
                            y = e;
                        }
                    }
                    //assemble a constructor that can be passed to the style processor to process a line
                    var processedLine = controlProcessor.processLineXenon(attributes[i], styles[y]);
                    style.push(processedLine + ";");
                }
                var StackPanel = document.createElement("div");
                var attrs = [];
                var processableAttribute = [];
                for(var i = 0; i < attributes.length; i++) {
                    var y = 0;
                    for(var e = 0; e < controlAttrs.length; e++) {
                        if(attributes[i].name == controlAttrs[e][1]) {
                            var newAttribute = controlProcessor.processAttribute(attributes[i], controlAttrs[e]);
                            StackPanel.setAttribute(newAttribute[0], newAttribute[1]);
                            break;
                        }
                    }
                }
                //give the new element the processed style
                StackPanel.style = style.join("");
                //innerText(not inner HTML because deimcriment)
                //now we need innerHTML because of nested xaml(duh)
                StackPanel.innerHTML = control.innerHTML;
                control.replaceWith(StackPanel);
            }
        }
    }
    //register StackPanel as a control
    controlProcessor.registerControl([
        "STACKPANEL","stackpanel","StackPanel",
        StackPanel.process,
    ]);
    return StackPanel;
});