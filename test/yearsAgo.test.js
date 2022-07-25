let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe("The yearsAgo function" , function(){
    it("should  return how many years ago 1964 is from the current year." , function(){
        assert.equal(58, yearsAgo(1964)); 
    });
    it("should  return how many years ago that 1970 is from the current year." , function(){
        assert.equal(52, yearsAgo(1970)); 
    });
    it("should  return how many years ago that 2000 is from the current year." , function(){
        assert.equal(22, yearsAgo(2000)); 
    });
    it(" return how many years ago that 2020 is from the current year." , function(){
        assert.equal(2, yearsAgo(2020)); 
    });
})