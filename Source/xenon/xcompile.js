//compiler stack module
define([
    "xenon/controls",
    "xenon/styles/styles",
], function(
    controls,
    styles,
){
    var xcompile = {
        //get all the controls
        controls: controls,
        styles: styles,
    }
    return xcompile;
});