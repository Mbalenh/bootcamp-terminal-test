let assert = require("assert");
let regCheck = require("../regCheck");


describe("The regCheck function", function(){
    it("should return true if the regNums endsWith(regEnd)" , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });
    it("should return true if the regNums endsWith(regEnd)" , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it("should return false if the regNums endsWith(regEnd) is not the same as the regEnd" , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });
    it("should return false if the regNums is empty" , function(){
        assert.equal(regCheck(''), false)
    });
    it("should return false if the regNums  does not have regEnd " , function(){
        assert.equal(regCheck('ND 123-456'), false)
    });
});