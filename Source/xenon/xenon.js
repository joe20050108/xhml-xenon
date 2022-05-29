//the main compilation stack.
//reads through the document and runs all the code to re-write as HTML
define([
    "xenon/xcompile",
], function(xcompile) {
    var xenon = {
        moduleInfo: {
            name:"xenon",
            codename:"xenon",
            desc:"xaml2html compilation stack",
            build:"0.0.1",
        },
        //main function
        buildXHML: function() {
            console.log("Compiling XAML to HTML.");
        },
        xcompile: xcompile,
    }
    window.xenon = xenon;
    return xenon;
});