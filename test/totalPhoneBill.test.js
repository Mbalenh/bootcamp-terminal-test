let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe("The totalPoneBill function" , function(){
    it("should treturn the total of callBill & smsBill" , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("should return the total  bill of smsBill" , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
    it("should return the total of callBill & smsBill" , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it("should return  the total of callBill" , function(){
        assert.equal('R5.50', totalPhoneBill('call, call'));
    });
    
    
})