// Assert library
const assert = require("assert");
// Import calculate.js
const Calculate = require("../scripts/calculate.js");

describe("Calculate", () => {
  describe(".add", () => {
    it("adds two arguments together", () => {
      // Setup
      let num1 = 1;
      let num2 = 2;
      let expected = 3;
      // Exercise
      let result = Calculate.add(num1, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".subtract", () => {
    it("subtracts the second argument from the first", () => {
      // Setup
      let num1 = 2;
      let num2 = 1;
      let expected = 1;
      // Exercise
      let result = Calculate.subtract(num1, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".multiply", () => {
    it("multiplies the two arguments", () => {
      // Setup
      let num1 = 2;
      let num2 = 5;
      let expected = 10;
      // Exercise
      let result = Calculate.multiply(num1, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".divide", () => {
    it("divides the first argument by the second", () => {
      // Setup
      let num1 = 10;
      let num2 = 5;
      let expected = 2;
      // Exercise
      let result = Calculate.divide(num1, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
  });
});
