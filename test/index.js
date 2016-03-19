var should = require("chai").should();
var wog = require("../lib/wog.js");

describe("Setup", function(){
    it("should have a log method", function(){
        wog.should.have.property("log");
        (wog.log).should.be.a("function");
    });
});