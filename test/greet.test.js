let assert = require("assert");
let greet = require("../greet");


describe("greet function", function(){
    it("should greet Mbali with 'Hello, Mbali'" , function(){
        assert.equal(greet('Mbali'), 'Hello, Mbali')
    });
    it("should greet khanya with 'Hello, Khanya'" , function(){
        assert.equal(greet('Khanya'), 'Hello, Khanya')
    });
    it("should greet Toko with 'Hello, Toko'" , function(){
        assert.equal(greet('Toko'), 'Hello, Toko')
    });
    it("should greet  with 'Hello, '" , function(){
        assert.equal(greet(''), 'Hello, ')
    });
});
