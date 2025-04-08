function isPowerOfTwo(n) {
    if (n < 1) return false; // Power of two must be positive
  
    // Keep dividing by 2 as long as the number is even
    while (n % 2 === 0) {
      n = n / 2;
    }
  
    // If we end up with 1, it's a power of two
    return n === 1;
  }
  
  // Test cases
  console.log(isPowerOfTwo(8));  // true
  console.log(isPowerOfTwo(6));  // false
  

//   function isPowerOfTwo(n)

// The function takes a number n and checks if it is a power of 2.

// if (n < 1) return false;

// Powers of two are positive (1, 2, 4, 8, ...), so we rule out 0 or negative numbers.

// while (n % 2 === 0)

// If n is even, divide it by 2. We keep doing this until n becomes odd.

// return n === 1;

// After all divisions, if we’re left with 1, then it means n was a power of two.