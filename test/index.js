var should = require("chai").should();
var olg = require("../lib/olg.js");

describe("Setup", function(){
    it("should have a log method", function(){
        olg.should.have.property("log");
        (olg.log).should.be.a("function");
    });
});
