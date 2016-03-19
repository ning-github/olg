module.exports = new Wog;

// colors
var colors = {
    teal: 36,
    purple: 35
};

// apply color
function _colorify(str, color) {
    // UNIX start escape: \033[
    // UNIX end escape: m
    var setCustom = "\033[" + colors[color] + "m";
    var resetDefault = "\033[39m";
    // sandwich str between color setters
    return setCustom + str + resetDefault;
}

// converts arguments to a string
function _argsToString () {
    var argArray = Array.prototype.slice.call(arguments);
    return argArray.join(", ");
}

function Wog () {}

// log to server
Wog.prototype.log = function(){

    // get call stack
    var callStack = new Error().stack;

    // find the correct frame using the knowledge it is the first call following module compilation
    callStack = callStack.split("Module._compile")[0];
    callStack = callStack.split("\n");
    var callIndex = callStack.length - 2;
    var callFrame = callStack[callIndex];
    var callInfoIndex = callFrame.indexOf("(");
    var callInfo = callFrame.slice(callInfoIndex+1);

    // split the call info by colons
    var details = callInfo.split(":");
    // first element will be the file
    var callerFile = details[0];
    // second will be the line number
    var lineNum = details[1];

    // pass arguments to converter to be treated as same array-like object
    var output = _argsToString.apply(this, arguments);

    // color
    callerFile = _colorify(callerFile, "teal");
    lineNum = _colorify(lineNum, "purple");

    // smart log
    console.log(output + " ---logged from " + callerFile + " at line " + lineNum);
}
