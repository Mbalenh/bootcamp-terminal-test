let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe("The countAllFromTown function" , function(){
    it("should  return  total number of the reg,if registration number startsWith('CL')", function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it("should return the total fromStellie registration,if the reg startsWith('CL')", function(){
        assert.equal(3, countAllFromTown('CL 345 123, CL 345, CL 123','CL'));
    });
    it("should return the total regCode fromCapeTown ,if the regCode startsWith('CA')", function(){
        assert.equal(1, countAllFromTown('CA 345 123, CJ 345, CJ 123','CA'));
    });
    it("should return the total regCode that startsWith('CJ')", function(){
        assert.equal(0, countAllFromTown('CK 345 123, CK 345, CK 123','CJ'));
    });
   });