function generateFibonacci(limit) {
    const fibonacci = [0, 1]; // Start with the first two numbers of the sequence
  
    while (true) {
      const next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      if (next > limit) break; // Stop if the next number exceeds the limit
      fibonacci.push(next); // Add the next number to the sequence
    }
  
    return fibonacci;
  }
  
  const result = generateFibonacci(100);
  console.log("Fibonacci sequence up to 100:", result);
  

//   function generateFibonacci(limit)

// This function will generate the Fibonacci sequence up to the given limit, in this case, 100.

// const fibonacci = [0, 1];

// We initialize the sequence with the first two numbers: 0 and 1.

// while (true)

// An infinite loop. We'll break out of it when the next number is greater than the limit.

// const next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];

// We calculate the next Fibonacci number by adding the last two numbers in the array.

// if (next > limit) break;

// If the next number is greater than 100, we exit the loop.

// fibonacci.push(next);

// Otherwise, we add the number to the array.

// return fibonacci;

// After the loop finishes, return the entire sequence.

// console.log(...)

// Finally, print the result to the console.