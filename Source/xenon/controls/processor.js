//helper for controls
//this is known as the main control processor, and handles most of the common functions
//that controls need
//updates to this are more or less minimal now due to it being mostly dynamic
//some controls will need more code, and will have that code where it needs to be
/*
Control Processor
Variables: 
registeredControls: stores registered controls
Functions:
registerControl: registers a control to window.registeredControls for controls.js to be able to read
processLineXenon: processes a line of css that is compatable with xenon
processAttribute: processes an attribute and returns it in a xenon-friendly format
getControls: gets all html elements on the page(root is <HTML> by default)
processStyles: for a given element, the element's attributes, and a given set of rules, 
    it adds a style to the element
processAttributes: for a given element, the element's attributes, and a given set of rules,
    it adds the proper attributes to the targeted element
*/
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
        },
        //processes styles for a control when it is processing an element
        //it also now doesnt return a variable, but instead pushes the style to the element
        processStyles: function(element, data, rules) {
            var styles = [];
            for(var i = 0; i < data.length; i++) {
                var y = 0;
                for(var e = 0; e < rules.length; e++) {
                    if(data[i].name == rules[e][1]) {
                        y = e;
                    }
                }
                var line = this.processLineXenon(data[i], rules[y]);
                styles.push(line + ";");
            }
            element.style = styles.join("");
        },
        //process attributes(target element to set attribute, attribute data, attribute rules)
        processAttributes: function(element, data, rules) {
            var attributes = [];
            for(var i = 0; i < data.length; i++) {
                var y = 0;
                for(var e = 0; e < rules.length; e++) {
                    if(data[i].name == rules[e][1]) {
                        var attribute = this.processAttribute(data[i], rules[e]);
                        element.setAttribute(attribute[0], attribute[1]);
                        break;
                    }
                }
            }
        }
    }
    return processor;
});