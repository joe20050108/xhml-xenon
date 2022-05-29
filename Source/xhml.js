require([
    "requirejs",
    "xenon/xenon"], function(requirejs, xenon) {
        //the entire ass namespace
        var xhml = {
            xenon: xenon,
        }
        window.xhml = xhml;
});