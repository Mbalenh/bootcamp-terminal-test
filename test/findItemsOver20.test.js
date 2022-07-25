let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
  var results2 = [];
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
    
];

describe("The findItemOver20 function" , function(){
    it("should   return all the products that have a quantity higher than 20", function(){
        assert.deepEqual([],findItemsOver20(results2))    ;
    });
    it("should  return all the products that have a quantity higher than 20", function(){
        assert.deepEqual([ {name : 'pears', qty : 37},{name : 'bananas', qty : 27}], findItemsOver20(results));
    });
    it("should return all the products that have a quantity higher than 20", function(){
        assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}], findItemsOver20(results3));
    });
    
    
    
    });
   