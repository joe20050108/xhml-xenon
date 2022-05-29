//reads the parameters to see what CSS definition they match to, and then returns a properly formatted line
define(function() {
    var compilation = {
        processLine: function(key, data) {
            for(var i = 0; i < this.Properties.length; i++) {
                console.log("Command sent from compilation function processLine");
                if(key == this.Properties[i][0]) {
                    //check if the property has a unit or not
                    if(this.Properties[i].length > 2) {
                        return this.Properties[i][1] + ":" + data[key] + this.Properties[i][2];
                    }
                    else if(this.Properties[i].length < 3) {
                        return this.Properties[i][1] + ":" + data[key];
                    }
                }
            }
        },
        //more xenon-friendly line processor
        processLineXenon: function(data, rules) {
            if(rules.length > 3) {
                return rules[3] + ":" + data.value + rules[4];
            }
            else if(rules.length < 3) {
                return rules[3] + ":" + data.value;
            }
        },
        //database of all possible properties
        Properties: [
            ["Width","width","px"],
            ["Height","height","px"],
            ["Background","background"],
        ]
    }
    return compilation;

    /*
    background
background-attachment
background-color
background-image
background-position
background-repeat
border
border-bottom
border-bottom-color
border-bottom-style
border-bottom-width
border-color
border-left
border-left-color
border-left-style
border-left-width
border-right
border-right-color
border-right-style
border-right-width
border-style
border-top
border-top-color
border-top-style
border-top-width
border-width
clear
clip
color
cursor
display
filter
float
font
font-family
font-size
font-variant
font-weight
height
left
letter-spacing
line-height
list-style
list-style-image
list-style-position
list-style-type
margin
margin-bottom
margin-left
margin-right
margin-top
overflow
padding
padding-bottom
padding-left
padding-right
padding-top
page-break-after
page-break-before
position
stroke-dasharray
stroke-dashoffset
text-align
text-decoration
text-indent
text-transform
top
vertical-align
visibility
width
z-index*/
});
