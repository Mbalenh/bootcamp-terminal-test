let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe("The countAllPaarl function" , function(){
it("It should return 2 registrations from CJ if there are three registration numbers from Paarl", function(){
    assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
});
it("It should return 1 registrations from CJ ,if registration numbers from paarl", function(){
    assert.equal(1, countAllPaarl('CK 345 123, CK 345, CJ 123'));
});
it("It should return 3 registrations from CJ if there are three registration numbers from Paarl", function(){
    assert.equal(3, countAllPaarl('CJ 345 123, CJ 345, CJ 123'));
});
it("It should return 0 registrations from CJ if there are no registration numbers from Paarl", function(){
    assert.equal(0, countAllPaarl('CK 345 123, CK 345, CK 123'));
});
it("It should return 0 registrations from CJ if there are no registration numbers from Paarl", function(){
    assert.equal(0, countAllPaarl("NUZ 10") );
});


});