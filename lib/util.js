// colors
var colors = {
    teal: 36,
    purple: 35
};

// apply color
module.exports = {
    colorify: colorify,
    argsToString: argsToString
};

function colorify(str, color) {
    // UNIX start escape: \033[
    // UNIX end escape: m
    var setCustom = "\033[" + colors[color] + "m";
    var resetDefault = "\033[39m";
    // sandwich str between color setters
    return setCustom + str + resetDefault;
}

// converts arguments to a string
function argsToString () {
    var argArray = Array.prototype.slice.call(arguments);
    return argArray.join(", ");
}
