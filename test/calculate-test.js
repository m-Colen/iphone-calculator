/***
Imports
***/

/* CJS Imports for testing in Node */
const assert = require("assert");
const Calculate = require("../scripts/calculate.js");

/***
Calculate module tests
***/

describe("Calculate", () => {
  describe(".convertPercent", () => {
    it("divides a positive number by 100 and returns the new value", () => {
      // Setup
      let num1 = 50;
      let expected = 0.5;
      // Exercise
      let result = Calculate.convertPercent(num1);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides a negative number by 100 and returns the new value", () => {
      // Setup
      let num1 = -50;
      let expected = -0.5;
      // Exercise
      let result = Calculate.convertPercent(num1);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides a decimal by 100 and returns the new value", () => {
      // Setup
      let num1 = 0.5;
      let expected = 0.005;
      // Exercise
      let result = Calculate.convertPercent(num1);
      // Verify
      assert.strictEqual(result, expected);
    });
  });

  describe(".addDecimal", () => {
    it("decimal point is added to the end of an array when there is no decimal point present in the array", () => {
      // Setup
      let array = [1];
      let expected = [1, "."];
      // Exercise
      let result = Calculate.addDecimal(array);
      // Verify
      assert.deepStrictEqual(result, expected);
    });
    it("original array is returned when there is a decimal point present in the array", () => {
      // Setup
      let array = [1, ".", 5];
      let expected = array;
      // Exercise
      let result = Calculate.addDecimal(array);
      // Verify
      assert.deepStrictEqual(result, expected);
    });
  });

  describe(".result", () => {
    /***
    Divide
    ***/

    it("divides positive integer by positive integer and returns the result", () => {
      // Setup
      let num1 = 10;
      let operator = "/";
      let num2 = 5;
      let expected = 2;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides negative integer by positive integer and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "/";
      let num2 = 5;
      let expected = -2;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides negative integer by negative integer and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "/";
      let num2 = -5;
      let expected = 2;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides positive integer by positive floating point num and returns the result", () => {
      // Setup
      let num1 = 10;
      let operator = "/";
      let num2 = 0.1;
      let expected = 100;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides negative integer by positive floating point num and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "/";
      let num2 = 0.1;
      let expected = -100;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides negative integer by negative floating point num and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "/";
      let num2 = -0.1;
      let expected = 100;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides positive floating point num by positive floating point num and returns the result", () => {
      // Setup
      let num1 = 0.1;
      let operator = "/";
      let num2 = 0.1;
      let expected = 1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides negative floating point num by positive floating point num and returns the result", () => {
      // Setup
      let num1 = -0.1;
      let operator = "/";
      let num2 = 0.1;
      let expected = -1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("divides negative floating point num by negative floating point num and returns the result", () => {
      // Setup
      let num1 = -0.1;
      let operator = "/";
      let num2 = -0.1;
      let expected = 1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });

    /***
    Multiply
    ***/

    it("multiplies positive integer by positive integer and returns the result", () => {
      // Setup
      let num1 = 10;
      let operator = "*";
      let num2 = 5;
      let expected = 50;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("multiplies negative integer by positive integer and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "*";
      let num2 = 5;
      let expected = -50;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("multiplies negative integer by negative integer and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "*";
      let num2 = -5;
      let expected = 50;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("multiplies positive integer by positive floating point num and returns the result", () => {
      // Setup
      let num1 = 10;
      let operator = "*";
      let num2 = 0.1;
      let expected = 1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("multiplies negative integer by positive floating point num and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "*";
      let num2 = 0.1;
      let expected = -1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("multiplies negative integer by negative floating point num and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "*";
      let num2 = -0.1;
      let expected = 1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("multiplies positive floating point num by positive floating point num and returns the result", () => {
      // Setup
      let num1 = 0.5;
      let operator = "*";
      let num2 = 0.5;
      let expected = 0.25;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("multiplies negative floating point num by positive floating point num and returns the result", () => {
      // Setup
      let num1 = -0.5;
      let operator = "*";
      let num2 = 0.5;
      let expected = -0.25;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("multiplies negative floating point num by negative floating point num and returns the result", () => {
      // Setup
      let num1 = -0.5;
      let operator = "*";
      let num2 = -0.5;
      let expected = 0.25;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });

    /***
    Add
    ***/

    it("adds positive integer to positive integer and returns the result", () => {
      // Setup
      let num1 = 10;
      let operator = "+";
      let num2 = 5;
      let expected = 15;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("adds negative integer to positive integer and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "+";
      let num2 = 5;
      let expected = -5;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("adds negative integer to negative integer and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "+";
      let num2 = -5;
      let expected = -15;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("adds positive integer to positive floating point num and returns the result", () => {
      // Setup
      let num1 = 10;
      let operator = "+";
      let num2 = 0.1;
      let expected = 10.1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("adds negative integer to positive floating point num and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "+";
      let num2 = 0.1;
      let expected = -9.9;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("adds negative integer to negative floating point num and returns the result", () => {
      // Setup
      let num1 = -10;
      let operator = "+";
      let num2 = -0.1;
      let expected = -10.1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("adds positive floating point num to positive floating point num and returns the result", () => {
      // Setup
      let num1 = 0.5;
      let operator = "+";
      let num2 = 0.5;
      let expected = 1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("adds negative floating point num to positive floating point num and returns the result", () => {
      // Setup
      let num1 = -0.5;
      let operator = "+";
      let num2 = 0.5;
      let expected = 0;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("adds negative floating point num to negative floating point num and returns the result", () => {
      // Setup
      let num1 = -0.5;
      let operator = "+";
      let num2 = -0.5;
      let expected = -1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });

    /***
    Subtract
    ***/

    it("returns the result of positive integer minus positive integer", () => {
      // Setup
      let num1 = 10;
      let operator = "-";
      let num2 = 5;
      let expected = 5;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns the result of negative integer minus positive integer", () => {
      // Setup
      let num1 = -10;
      let operator = "-";
      let num2 = 5;
      let expected = -15;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns the result of negative integer minus negative integer", () => {
      // Setup
      let num1 = -10;
      let operator = "-";
      let num2 = -5;
      let expected = -5;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns the result of positive integer minus positive floating point num", () => {
      // Setup
      let num1 = 10;
      let operator = "-";
      let num2 = 0.1;
      let expected = 9.9;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns the result of negative integer minus positive floating point num", () => {
      // Setup
      let num1 = -10;
      let operator = "-";
      let num2 = 0.1;
      let expected = -10.1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns the result of negative integer minus negative floating point num", () => {
      // Setup
      let num1 = -10;
      let operator = "-";
      let num2 = -0.1;
      let expected = -9.9;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns the result of positive floating point num minus positive floating point num", () => {
      // Setup
      let num1 = 0.5;
      let operator = "-";
      let num2 = 0.5;
      let expected = 0;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns the result of negative floating point num minus positive floating point num", () => {
      // Setup
      let num1 = -0.5;
      let operator = "-";
      let num2 = 0.5;
      let expected = -1;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
    it("returns the result of negative floating point num minus negative floating point num", () => {
      // Setup
      let num1 = -0.5;
      let operator = "-";
      let num2 = -0.5;
      let expected = 0;
      // Exercise
      let result = Calculate.result(num1, operator, num2);
      // Verify
      assert.strictEqual(result, expected);
    });
  });
});
