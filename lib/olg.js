var util = require("./util");
var colorify = util.colorify;
var argsToString = util.argsToString

module.exports = new Olg;

function Olg () {}

// log to server
Olg.prototype.log = function(){
    // get call stack
    var callStack = new Error().stack;

    // use knowledge that second call in stack is where olg.log was invoked
    callStack = callStack.split("\n");

    var callIndex = 2
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
    var output = argsToString.apply(this, arguments);

    // trim callerFile of user's home path
    var home = process.env.HOME || '';
    if (home) {
        callerFile = callerFile.replace(home, "~");
    }

    // color
    callerFile = colorify(callerFile, "teal");
    lineNum = colorify(lineNum, "purple");

    // smart log
    console.log(output + " ---logged from " + callerFile + " at line " + lineNum);
}
