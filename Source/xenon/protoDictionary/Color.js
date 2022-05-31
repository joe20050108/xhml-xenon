define([
    "xenon/controls/processor",
    "xenon/protoDictionary/attributes"
], function(controlProcessor, attributes) {
    var Color = {
        process: function(control) {
            //want to have some fun with the styles here..
            var Color = document.createElement("div");
            var attrs = control.attributes;
            Color.innerHTML = control.innerHTML;
            controlProcessor.processAttributes(Color, attrs, attributes);
            var style = "background-color: " + Color.innerHTML + ";";
            Color.setAttribute("Type","Color");
            Color.style = style;
            control.replaceWith(Color);
        }
    }
    controlProcessor.registerControl([
        "COLOR","color","Color",
        Color.process,
    ]);
    return Color;
});