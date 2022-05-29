define([
    "xenon/styles/compiler/assembleCSS",
    "xenon/styles/compiler/assembleStyle"
], function(assembleCSS, assembleStyle) {
    //two types of styles that can be assembled
    var types = {
        style: "style",
        stylesheet: "stylesheet",
    }
    var styles = {
        assembleStylesheet: function(params) {
            assembleCSS.buildStylesheet("hello from param");
        },
        //buildStyles
        //compiles the stylesheet based on its type and returns it.
        buildStyle: function(styleInformation) {
            if(styleInformation.Type == "style") {
                var CompiledStyle = assembleStyle.buildStyle(styleInformation);
            }
            else if(styleInformation.Type == "stylesheet") {
                var CompiledStyle = assembleCSS.buildStylesheet(styleInformation);
            }
            else {
                throw new Error("Error: Stylesheet compilation failed. (Type is not style OR stylesheet.) \n Compilation failed!");
            }
            return CompiledStyle;
        }
    }
    return styles;
});

(function() {
    //sample stylesheet information
    var sampleStyleDef = {
        Type: "style",
        Information:{
            Height: "32",
            Width: "32",
            Background: "rgba(255,255,255,0.1)",
        }
    }
});