function reverseString(str) {
    // Split the string into an array of characters, reverse it, and then join the characters back into a string
    return str.split('').reverse().join('');
  }
  
  // Test case
  const input = "hello";
  const expectedOutput = "olleh";
  const actualOutput = reverseString(input);
  
  if (actualOutput === expectedOutput) {
    console.log(`Test passed! The reversed string of ${input} is ${actualOutput}`);
  } else {
    console.error(`Test failed! Expected ${expectedOutput}, but got ${actualOutput}`);
  }
  