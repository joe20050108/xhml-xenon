define([
    "xenon/controls/processor",
], function(proc) {
    window.registeredControls.push("pushed manually ");
    proc.registerControl("pushed using controlprocessor");
})