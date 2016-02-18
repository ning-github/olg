module.exports = new Wog;

function Wog () {
}

Wog.prototype.log = function(){

    // get trace details
    var callerFrame = new Error().stack.split("\n")[2];
    var callerFile = process.argv[1];

    // get exact line number
    var lineNumIndex = callerFrame.indexOf(callerFile);
    var dirtyLine = callerFrame.slice(lineNumIndex+callerFile.length+1);
    var chopIndex = dirtyLine.indexOf(":");
    var lineNum = dirtyLine.slice(0, chopIndex);

    // pass arguments to converter to be treated as same array-like object
    var output = _argsToString.apply(this, arguments);

    // smart log
    console.log(output + " ---logged from " + callerFile + " at line " + lineNum);
}

// converts arguments to a string
function _argsToString () {
    var argArray = Array.prototype.slice.call(arguments);
    return argArray.join(', ');
}
