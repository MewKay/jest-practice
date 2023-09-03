const Calculator = function CalculatorFactory() {
  const add = function addTwoNumbers(a, b) {
    return a + b;
  };

  const substract = function substractTwoNumbers(a, b) {
    return a - b;
  };

  const divide = function divideTwoNumbers(a, b) {
    return a / b;
  };

  const multiply = function multiplyTwoNumbers(a, b) {
    return a * b;
  };

  return {
    add,
    substract,
    divide,
    multiply,
  };
};

export default Calculator;
