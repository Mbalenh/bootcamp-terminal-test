let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe("The countAllFromTown function" , function(){
    it("It should return 2 registrations from CL if there are three registration numbers from fromstellie", function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,','CL'));
    });
    it("It should return 3 registrations from CL if there are three registration numbers fromstellie", function(){
        assert.equal(3, countAllFromTown('CL 345 123, CL 345, CL 123','CL'));
    });
    it("It should return 3 registrations from CA if there are three registration numbers from cape town", function(){
        assert.equal(1, countAllFromTown('CA 345 123, CJ 345, CJ 123','CA'));
    });
    it("It should return 0 registrations from CJ if there are three registration numbers from Cj", function(){
        assert.equal(0, countAllFromTown('CK 345 123, CK 345, CK 123','CJ'));
    });
   });