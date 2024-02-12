// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

function divide(numerator, denominator) {
  if (denominator === 0) {
    throw Error("Attempted to divide by zero.");
  }
  return numerator / denominator;
}

// Testing divide function

// valid division
try {
    console.log("Result of 3 / 2 =", divide(3, 2), "\n"); // Expected output: 1.5
} catch (e) {
    console.log("Error while dividing 3 by 2:", e);
}

// invalid division
try {
    console.log("Result of 3 / 0 =", divide(3, 0)); // Expected output: Error: Attempted to divide by zero.
} catch (e) {
    console.log("Error while dividing 3 by 0. Error Description is as follows:\n", e);
}