define([
    "xenon/controls/processor",
    "xenon/protoDictionary/attributes",
], function(controlProcessor, attributes) {
    var SolidColorBrush = {
        process: function(control) {
            var SolidColorBrush = document.createElement("div");
            var attrs = control.attributes;
            SolidColorBrush.innerHTML = control.innerHTML;
            controlProcessor.processAttributes(SolidColorBrush, attrs, attributes);
            SolidColorBrush.setAttribute("Type", "SolidColorBrush");
            control.replaceWith(SolidColorBrush);
        }
    }
    controlProcessor.registerControl([
        "SOLIDCOLORBRUSH","solidcolorbrush","SolidColorBrush",
        SolidColorBrush.process,
    ]);
    return SolidColorBrush;
});