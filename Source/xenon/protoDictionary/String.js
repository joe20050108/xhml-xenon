define([
    "xenon/controls/processor",
    "xenon/protoDictionary/attributes",
], function(controlProcessor, attributes) {
    var String = {
        process: function(control) {
            var String = document.createElement("div");
            var attrs = control.attributes;
            String.innerHTML = control.innerHTML;
            String.setAttribute("type","x:String");
            controlProcessor.processAttributes(String, attrs, attributes);
            control.replaceWith(String);
        }
    }
    controlProcessor.registerControl([
        "X:STRING","x:string", "x:String",
        String.process,
    ]);
    return String;
});