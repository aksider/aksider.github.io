var pow = require('../javascript/src/jasmineTest/jasmineTest.js')

describe("It pow.math method", function() {
  it("It pow.math method", function() {
  	//prepare
  	var result1;

  	//act
  	result1 = pow.powNow(2,2);

  	//assert
    expect(result1).toBe(4);
  });
});

describe("It pow.math method", function() {
  it("It pow.math method", function() {
  	//prepare
  	var result2;

  	//act
  	result2 = pow.powNow(2,3);

  	//assert
    expect(result2).toBe(8);
  });
});

describe("It pow.math method", function() {
  it("It pow.math method", function() {
  	//prepare
  	var result3;

  	//act
  	result3 = pow.powNow(2,4);

  	//assert
    expect(result3).toBe(16);
  });
});