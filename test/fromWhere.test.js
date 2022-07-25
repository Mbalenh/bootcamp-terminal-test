let assert = require("assert");
let fromWhere = require("../fromWhere");


describe("The fromWhere function" , function(){
    it("should return the regNum from Belliville if regNum startsWith('CY')", function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it("should return the regNum from Paarl if regNum startsWith('CJ')", function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });
    it("shouldreturn the regNum from Belliville if regNum startsWith('CA')", function(){
        assert.equal(fromWhere('CA'), 'Cape Town');

    });
    it("should  return Some other place!, if the reg number is not Bellville,Paarl & Cape Town  ", function(){
        assert.equal(fromWhere('CK'), 'Some other place!');

    });
    
    });