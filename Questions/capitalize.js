function capitalizeWords(str) {
    return str
      .split(' ') // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
      .join(' '); // Join words back into a string
  }
  
  // Test cases
  console.log(capitalizeWords("hi")); // "Hi"
  console.log(capitalizeWords("hello world")); // "Hello World"
  

//   .split(' ')

// Splits the input string into an array of words based on spaces.
// Example: "hello world" → ["hello", "world"]

// .map(...)

// Goes through each word and does the following:

// word.charAt(0).toUpperCase() → capitalizes the first character.

// word.slice(1) → keeps the rest of the word unchanged.

// Combines them: H + ello = Hello

// .join(' ')

// Joins the array of words back into a single string with spaces.

