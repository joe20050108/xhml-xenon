define([
    "xenon/controls/StackPanel/styles",
    "xenon/controls/StackPanel/attributes",
    "xenon/controls/processor",

    //going to need to use the fucking annoying stylesheet compilation stack
], function(styles, controlAttrs, controlProcessor) {
    var StackPanel = {
        //process a control directed to it
        process: function(control) {
            if(control.tagName == "STACKPANEL" || control.tagName == "StackPanel" || control.tagName == "stackpanel") {
                var attributes = control.attributes;
                var StackPanel = document.createElement("div");
                //process styles
                controlProcessor.processStyles(StackPanel, attributes, styles);
                //process attributes
                controlProcessor.processAttributes(StackPanel, attributes, controlAttrs);
                //sync innerHTML between the two
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