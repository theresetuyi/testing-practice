class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  describe("Calculator", () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe("add", () => {
      test("adds two positive numbers", () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      test("adds a positive and a negative number", () => {
        expect(calculator.add(2, -3)).toBe(-1);
      });
  
      test("adds two negative numbers", () => {
        expect(calculator.add(-2, -3)).toBe(-5);
      });
    });
  
    describe("subtract", () => {
      test("subtracts two positive numbers", () => {
        expect(calculator.subtract(5, 2)).toBe(3);
      });
  
      test("subtracts a positive and a negative number", () => {
        expect(calculator.subtract(5, -2)).toBe(7);
      });
  
      test("subtracts two negative numbers", () => {
        expect(calculator.subtract(-5, -2)).toBe(-3);
      });
    });
  
    describe("divide", () => {
      test("divides two positive numbers", () => {
        expect(calculator.divide(6, 3)).toBe(2);
      });
  
      test("throws an error when dividing by zero", () => {
        expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
      });
  
      test("divides a negative and a positive number", () => {
        expect(calculator.divide(-6, 3)).toBe(-2);
      });
    });
  
    describe("multiply", () => {
      test("multiplies two positive numbers", () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });
  
      test("multiplies a positive and a negative number", () => {
        expect(calculator.multiply(2, -3)).toBe(-6);
      });
  
      test("multiplies two negative numbers", () => {
        expect(calculator.multiply(-2, -3)).toBe(6);
      });
    });
  });
  