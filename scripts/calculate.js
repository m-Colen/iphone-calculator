/***
Calculate module
***/

export const Calculate = {
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
        return num1 / num2;
      case "*":
        return num1 * num2;
      case "+":
        console.log("num1:", num1);
        console.log("num2:", num2);
        return num1 + num2;
      case "-":
        return num1 - num2;
    }
  },
};

/* CJS Export for node.js testing */
// module.exports = Calculate;
