let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe("The isFromBellville function", function(){
    it("should  return true .if the regNums.startsWith('CY')" , function(){
        assert.equal(isFromBellville('CY 123'), true)
    });
    it(" should return true ifThe registration number from Bellville startsWith('CY')" , function(){
        assert.equal(isFromBellville('CY 143'), true)
    });
    it("should returnfalse,if registration number is not from Bellville and dont startsWith('CJ')" , function(){
        assert.equal(isFromBellville('CJ 123'), false)
    });
    it("should return false,if registration number is not from Bellville" , function(){
        assert.equal(isFromBellville('NUZ 123'), false)
    });
    
});



