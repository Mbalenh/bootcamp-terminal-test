let assert = require("assert");
let findItemsOver = require("../findItemsOver");

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}
];
  var results2 = [];
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];
describe("The findItemOver function" , function(){
    it("should return products of the results that have quantity higher than the threshold", function(){
        assert.deepEqual([], findItemsOver(results2, 20));
    });
    it("should  return products of the result1 that have quantity higher than the threshold ", function(){
        assert.deepEqual([ {name : 'pears', qty : 37},{name : 'bananas', qty : 27}], findItemsOver(results, 20));
    });
    it("should return products of the result2 that have quantity higher than the threshold", function(){
        assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}], findItemsOver(results3, 20));;
    });
    
    
    
    });
    