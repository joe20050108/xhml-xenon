define([
    "xenon/controls/processor",
    "xenon/protoDictionary/attributes",
], function(controlProcessor, attributes) {
    var LinearGradientBrush = {
        processLGB: function(control) {
            var attrs = control.attributes;
            var LinearGradientBrush = document.createElement("div");
            controlProcessor.processAttributes(LinearGradientBrush, attrs, attributes);
            LinearGradientBrush.innerHTML = control.innerHTML;
            LinearGradientBrush.setAttribute("type","LinearGradientBrush");
            control.replaceWith(LinearGradientBrush);
        },
        processLGBRT: function(control) {
            var attrs = control.attributes;
            //re-used code
            var LinearGradientBrush = document.createElement("div");
            controlProcessor.processAttributes(LinearGradientBrush, attrs, attributes);
            LinearGradientBrush.innerHTML = control.innerHTML;
            LinearGradientBrush.setAttribute("type","LinearGradientBrush.RelativeTransform");
            control.replaceWith(LinearGradientBrush);
        },
        processST: function(control) {
            var attrs = control.attributes;
            //re-used code
            var LinearGradientBrush = document.createElement("div");
            controlProcessor.processAttributes(LinearGradientBrush, attrs, attributes);
            LinearGradientBrush.innerHTML = control.innerHTML;
            LinearGradientBrush.setAttribute("type","ScaleTransform");
            control.replaceWith(LinearGradientBrush);
        },
        processLGBGS: function(control) {
            var attrs = control.attributes;
            //re-used code
            var LinearGradientBrush = document.createElement("div");
            controlProcessor.processAttributes(LinearGradientBrush, attrs, attributes);
            LinearGradientBrush.innerHTML = control.innerHTML;
            LinearGradientBrush.setAttribute("type","LinearGradientBrush.GradientStops");
            control.replaceWith(LinearGradientBrush);
        },
        processGS: function(control) {
            var attrs = control.attributes;
            //re-used code
            var LinearGradientBrush = document.createElement("div");
            controlProcessor.processAttributes(LinearGradientBrush, attrs, attributes);
            LinearGradientBrush.innerHTML = control.innerHTML;
            LinearGradientBrush.setAttribute("type","GradientStop");
            control.replaceWith(LinearGradientBrush);
        }
    }
    controlProcessor.registerControl([
        "LINEARGRADIENTBRUSH","lineargradientbrush","LinearGradientBrush",
        LinearGradientBrush.processLGB,
    ]);
    controlProcessor.registerControl([
        "LINEARGRADIENTBRUSH.RELATIVETRANSFORM","lineargradientbrush.relativetransform","LinearGradientBrush.RelativeTransform",
        LinearGradientBrush.processLGBRT,
    ]);
    controlProcessor.registerControl([
        "SCALETRANSFORM","scaletransform","ScaleTransform",
        LinearGradientBrush.processST,
    ]);
    controlProcessor.registerControl([
        "LINEARGRADIENTBRUSH.GRADIENTSTOPS","lineargradientbrush.gradientstops","LinearGradientBrush.GradientStops",
        LinearGradientBrush.processLGBGS,
    ]);
    controlProcessor.registerControl([
        "GRADIENTSTOP","gradientstop","GradientStop",
        LinearGradientBrush.processGS,
    ]);
    return LinearGradientBrush;
});