let assert = require("assert");
let transportFee = require("../transportFee");

describe("The transportFee function" , function(){
    it("should return the right amount of price based on the current  working shift", function(){
        assert.equal(transportFee('morning') , 'R20');
    });
    it("should return the right amount of price based on the current  working shift", function(){
        assert.equal(transportFee('afternoon'), 'R10');

    });
    it("should return the right amount of price based on the current  working shift", function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
        
    });
    it("should return the right amount of price based on the current  working shift ", function(){
        assert.equal(transportFee('notworking') , 'free');
        
    });
    
    
    });