var path = require("path");

var Wog = function () {
}

Wog.prototype.log = function(logMe){

    var callerFrame = new Error().stack.split("\n")[2];
    var callerFile = process.argv[1];

    var lineNumIndex = callerFrame.indexOf(callerFile);
    var dirtyLine = callerFrame.slice(lineNumIndex+callerFile.length+1);
    var chopIndex = dirtyLine.indexOf(":");
    var lineNum = dirtyLine.slice(0, chopIndex);
    console.log(logMe + " ---logged from " + callerFile + " at line " + lineNum);
}

module.exports = new Wog;


