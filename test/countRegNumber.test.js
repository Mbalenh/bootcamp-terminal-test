let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe("The countRegNumber function" , function(){
    it("should return the total number of regNums.startsWith(regNums)" , function(){
        assert.equal(countRegNumber('CA111 , CJ 134 , CK 124'), 3);   
    })
    it("should return the total count of the  regNumber that passes through it" , function(){
        assert.equal(countRegNumber('CA111 , CJ 134'), 2);   
    })

    it("should return the total count of the  regNumber that passes through it" , function(){
        assert.equal(countRegNumber('CA2 , CT34'), 2);   
    })
    it("should return the total count of the  regNumber that passes through it" , function(){
        assert.equal(countRegNumber('CA111'), 1);   
    })

});