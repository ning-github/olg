module.exports = wog;

function wog (logMe) {
    var callerFrame = new Error().stack.split("\n")[2];
    var lineNumIndex = callerFrame.indexOf(__filename);
    var dirtyLine = callerFrame.slice(lineNumIndex+__filename.length+1);
    var chopIndex = dirtyLine.indexOf(":");
    var lineNum = dirtyLine.slice(0, chopIndex);

    console.log(logMe + " ---logged from " + __filename + " at line " + lineNum);
}
