define(["xenon/styles/compiler/compilation"],function(compilation) {
    var assembleStyle = {
        buildStyle: function(params) {
            console.log("Building style from parameters: " + params);
            //parse all information from the information object of the inputted param
            var style = this.parseStyleInformation(params.Information);
            console.log(style.join(""));
        },
        //reads all information and returns the data
        parseStyleInformation: function(information) {
            var length = Object.keys(information).length;
            var style = [];
            //for loop
            for(var i = 0; i < length; i++) {
                //compilation.processLine(Object.keys(information)[0];
                console.log("hi");
                //process a line of the style at a time.
                var processedLine = compilation.processLine(Object.keys(information)[i], information);
                style.push(processedLine);
                style.push(";");
            }
            return style;
        }
    }
    return assembleStyle;
});