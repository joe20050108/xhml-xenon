//helper for controls
define([

], function() {
    //stores the list of controls
    window.registeredControls = [];
    //push a control to regedcontrls
    var processor = {
        registerControl: function(control) {
            window.registeredControls.push(control);
        },
        registeredControls: window.registeredControls,
        //using this instead of the style stack, which is too complex for xenon
        //more xenon-friendly line processor
        processLineXenon: function(data, rules) {
            if(rules.length > 3) {
                return rules[2] + ":" + data.value + rules[3];
            }
            else if(rules.length = 3) {
                return rules[2] + ":" + data.value;
            }
        },
        processAttribute: function(data, rules) {
            return [rules[2], data.value];
        },
        getControls: function() {
            return document.getElementsByTagName("html")[0].getElementsByTagName("*");
        }
    }
    return processor;
});