/*****
Imports
*****/

/* CJS Imports for testing in Node */
// Assert library
const assert = require("assert");
// Import calculate.js
const Calculate = require("../scripts/calculate.js");
// Imports display.js
const Display = require("../scripts/display.js");

/*****
Calculate module tests
*****/

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

/*****
Display module tests
*****/

describe("Display", () => {
  describe(".logInput", () => {
    it("adds input number to an empty array and returns the new array", () => {
      // Setup
      let number = 1;
      let expected = [number];
      // Exercise
      let array = [];
      let result = Display.logInput(1, array);
      // Verify
      assert.deepStrictEqual(result, expected);
    });
    it("adds input number to an already populated array and returns the new array", () => {
      // Setup
      let num1 = 1;
      let num2 = 2;
      let expected = [num1, num2];
      // Exercise
      let array = [1];
      let result = Display.logInput(2, array);
      // Verify
      assert.deepStrictEqual(result, expected);
    });
  });

  describe(".joinInput", () => {
    it("joins array numbers in string format", () => {
      // Setup
      let expected = "12";
      // Exercise
      let array = [1, 2];
      let result = Display.joinInput(array);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".clearDisplay", () => {
    it("clears the current array and returns an array with [0]", () => {
      // Setup
      let currentArray = [1, 2, 3];
      let expected = [0];
      // Exercise
      let result = Display.clearDisplay(currentArray);
      // Verify
      assert.deepStrictEqual(result, expected);
    });
  });
});
