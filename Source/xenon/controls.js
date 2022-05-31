define([
    "xenon/controls/StackPanel",
    "xenon/controls/TextBox",
    "xenon/controls/test",
    "xenon/controls/processor",
    "xenon/controls/TextBlock",
    "xenon/protoDictionary/proto.js",
], function(
    StackPanel,
    TextBox,
    Test,
    controlProcessor,
    TextBlock,
    Dictionary,
) {
    //control holder
    //code
    var controls = {
        StackPanel: StackPanel,
        TextBox: TextBox,
        initialize: function() {

        },
        getRegisteredControls: function() {
            return window.registeredControls;
        },
        processAll: function() {
            var allElements = controlProcessor.getControls();
            //for every element
            for(var i = allElements.length -1 ; i >= 0; --i) {
                var y = 0;
                //for every registered control
                for(var e = 0; e < window.registeredControls.length; e++) {
                    //see if there is a match between the possible tag names
                    for(var y = 0; y < 3; y++) {
                        if(allElements[i].tagName == window.registeredControls[e][y]) {
                            //if all conditions are met, process that element
                            window.registeredControls[e][3](allElements[i]);
                        }
                    }
                }
            }
        }
    }
    return controls;
});