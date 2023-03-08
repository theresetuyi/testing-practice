function stringLength(string) {
    const length = string.length;
        
    if (length < 1) {
        throw new Error("String must be at least 1 character long");
    }
        
    if (length > 10) {
        throw new Error("String cannot be longer than 10 characters");
      }
        
    return length;
    }
      
      function assertEquals(actual, expected) {
        if (actual !== expected) {
          throw new Error(`Assertion failed: expected ${expected}, but got ${actual}`);
        }
      }
      
      function testStringLength() {
        // Test case 1: Valid input
        const input1 = "Hello, world!";
        const expectedOutput1 = 13;
        const output1 = stringLength(input1);
        assertEquals(output1, expectedOutput1);
        
        // Test case 2: Short string
        const input2 = "a";
        const expectedOutput2 = 1;
        const output2 = stringLength(input2);
        assertEquals(output2, expectedOutput2);
        
        // Test case 3: long string
        const input3 = "my name is long";
        const expectedOutput3 = 15;
        const output3 = stringLength(input3);
        assertEquals(output3, expectedOutput3);
      }
      
      testStringLength();
      