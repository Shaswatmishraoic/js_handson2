function printMessage() {
    console.log("Hello, world!");
  }
  // Call the function
  printMessage();

  function printSum(a, b) {
    var sum = a + b;
    console.log("Sum of", a, "and", b, "is", sum);
  }
  // Call the function
  printSum(3, 4);

  const calculateSum = (a, b) => a + b;
// Call the arrow function and store the result
const sum = calculateSum(3, 4);
// Print the sum
console.log("Sum:", sum);

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Example usage
  console.log(factorial(5));