/***
Imports
***/

/* CJS Imports for testing in Node */
// const assert = require("assert");
// const Calculate = require("../scripts/calculate.js");
// const Display = require("../scripts/display.js");

/***
Calculate module tests
***/

describe("Calculate", () => {
  // Shared variables
  let num1;
  let num2;

  describe(".add", () => {
    // Hook
    beforeEach(() => {
      num1 = 1;
      num2 = 2;
    });

    it("adds two arguments together", () => {
      // Setup
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
      let expected = -1;
      // Exercise
      let result = Calculate.subtract(num1, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".multiply", () => {
    it("multiplies the two arguments", () => {
      // Setup
      let expected = 2;
      // Exercise
      let result = Calculate.multiply(num1, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".divide", () => {
    it("divides the first argument by the second", () => {
      // Setup
      let expected = 0.5;
      // Exercise
      let result = Calculate.divide(num1, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".toggleNegative", () => {
    it("toggles an integer between negative/positive", () => {
      // Setup
      let expected = num1 * -1;
      // Exercise
      let result = Calculate.toggleNegative(num1);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("toggles a floating point number between negative/positive", () => {
      // Setup
      num1 = 0.5;
      let expected = num1 * -1;
      // Exercise
      let result = Calculate.toggleNegative(num1);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".convertPercent", () => {
    it("converts an integer value to a percentage", () => {
      // Setup
      num1 = 50;
      let expected = 0.5;
      // Exercise
      let result = Calculate.convertPercent(num1);
      // Verify
      assert.strictEqual(result, expected);
    });
  });
});

/***
Display module tests
***/

describe("Display", () => {
  describe(".logInput", () => {
    it("removes zero once user types in a new number", () => {
      // Setup
      let array = [0];
      let newNum = 1;
      let expected = [1];
      // Exercise
      let result = Display.logInput(newNum, array);
      // Verify
      assert.deepStrictEqual(result, expected);
    });
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
    it("clears any zeros at the beginning when logging a new number", () => {
      // Setup
      let currentArray = [0];
      let newNum = 1;
      let expected = [1];
      // Exercise
      let result = Display.logInput(newNum, currentArray);
      // Verify
      assert.deepStrictEqual(result, expected);
    });
  });

  describe(".joinInput", () => {
    it("joins array numbers in string format", () => {
      // Setup
      let expected = 12;
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
