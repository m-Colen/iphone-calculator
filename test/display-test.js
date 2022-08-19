/***
Imports
***/

/* CJS Imports for testing in Node */
const assert = require("assert");
const Display = require("../scripts/display.js");

/***
Display module tests
***/

describe("Display", () => {
  describe(".logInput", () => {
    it("pushes an input number to the end of an empty array", () => {
      // Setup
      let inputNum = 1;
      let array = [];
      let expected = [1];
      // Exercise
      let result = Display.logInput(inputNum, array);
      // Verify
      assert.deepStrictEqual(result, expected);
    });
    it("pushes an input number to the end of a non-empty array", () => {
      // Setup
      let inputNum = 1;
      let array = [1];
      let expected = [1, 1];
      // Exercise
      let result = Display.logInput(inputNum, array);
      // Verify
      assert.deepStrictEqual(result, expected);
    });
  });

  describe(".joinInput", () => {
    it("returns a single number from an array with multiple numbers", () => {
      // Setup
      let array = [1, 2, 3];
      let expected = 123;
      // Exercise
      let result = Display.joinInput(array);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns zero when passed an array containing zero", () => {
      // Setup
      let array = [0];
      let expected = 0;
      // Exercise
      let result = Display.joinInput(array);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".clearDisplay", () => {
    it("returns an array containing zero", () => {
      // Setup
      let array = [1, 2, 3];
      let expected = [0];
      // Exercise
      let result = Display.clearDisplay(array);
      // Result
      assert.deepStrictEqual(result, expected);
    });
  });

  describe(".reduceFontSize", () => {
    it("returns 4.1 when the value is value <= 100000", () => {
      // Setup
      let value = 99999;
      let expected = 4.1;
      // Exercise
      let result = Display.reduceFontSize(value);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns 3.1 when value > 100000 && value <= 10000000", () => {
      // Setup
      let value = 100001;
      let expected = 3.1;
      // Exercise
      let result = Display.reduceFontSize(value);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns 2.5 when value > 10000000) & (value <= 100000000000", () => {
      // Setup
      let value = 10000001;
      let expected = 2.5;
      // Exercise
      let result = Display.reduceFontSize(value);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns 1.45 when value > 10000000) & (value <= 100000000000", () => {
      // Setup
      let value = 100000000001;
      let expected = 1.45;
      // Exercise
      let result = Display.reduceFontSize(value);
      // Verify
      assert.strictEqual(result, expected);
    });
  });
});
