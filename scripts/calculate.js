/***
Calculate module
***/

export const Calculate = {
  // Add method
  add(num1, num2) {
    return num1 + num2;
  },
  // Subtract method
  subtract(num1, num2) {
    return num1 - num2;
  },
  // Multiply method
  multiply(num1, num2) {
    return num1 * num2;
  },
  // Divide method
  divide(num1, num2) {
    return num1 / num2;
  },
  // Convert to percent
  convertPercent(value) {
    let newValue = value / 100;
    return newValue;
  },
  // Adds decimal point
  addDecimal(array) {
    if (!array.includes(".")) {
      if (array.length === 0) {
        array.push(0);
      }
      array.push(".");
      return array;
    } else {
      throw new Error("decimal already entered");
    }
  },
  // Result
  result(num1, operator, num2) {
    switch (operator) {
      case "/":
        return this.divide(num1, num2);
      case "*":
        return this.multiply(num1, num2);
      case "+":
        return this.add(num1, num2);
      case "-":
        return this.subtract(num1, num2);
    }
  },
};

/* CJS Export for node.js testing */
// module.exports = Calculate;
