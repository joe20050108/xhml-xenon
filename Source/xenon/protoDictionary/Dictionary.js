//a prototype XAML resource disctionary interpreter, designed for use with 
//WinJuvinated and other WinJS UI #UpdateNeeded applications.
define([
    "xenon/protoDictionary/attributes",
    "xenon/controls/processor",
], function(attributes, controlProcessor) {
    //register all "controls"
    var Dictionary  = {
        //process a <ResourceDictionary/> resource
        process: function(control) {
            var attrs = control.attributes;
            var ResourceDictionary = document.createElement("div");
            controlProcessor.processAttributes(ResourceDictionary, attrs, attributes);
            ResourceDictionary.innerHTML = control.innerHTML;
            ResourceDictionary.setAttribute("Type", "ResourceDictionary");
            control.replaceWith(ResourceDictionary);
        },
        //psuedo content for resourcedictionary
        processThemeDict: function(control) {
            var ThemeDictionary = document.createElement("div");
            ThemeDictionary.innerHTML = control.innerHTML;
            ThemeDictionary.setAttribute("Type", "ResourceDictionary.ThemeDictionaries")
            control.replaceWith(ThemeDictionary);
        },
    }
    controlProcessor.registerControl([
        "RESOURCEDICTIONARY.THEMEDICTIONARIES","resourcedictionary.themedictionaries","ResourceDictionary.ThemeDictionaries",
        Dictionary.processThemeDict,
    ]);
    controlProcessor.registerControl([
        "RESOURCEDICTIONARY","resourcedictionary","ResourceDictionary",
        Dictionary.process,
    ]);
    return Dictionary;
});