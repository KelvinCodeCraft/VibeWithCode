const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const target = Math.floor(Math.random() * 100) + 1;
const guesses = [];

console.log("Guess a number between 1 and 100!");

function askGuess() {
  rl.question("Enter your guess: ", (input) => {
    const guess = Number(input);

    if (isNaN(guess) || guess < 1 || guess > 100) { 
      console.log("OUT OF BOUNDS");
      return askGuess(); // ask again
    }

    guesses.push(guess);

    if (guess === target) {
      console.log(`Correct!  You guessed it in ${guesses.length} tries!`);
      return rl.close();
    }

    if (guesses.length === 1) {
      const diff = Math.abs(target - guess);
      console.log(diff <= 10 ? "WARM!" : "COLD!");
    } else {
      const prevDiff = Math.abs(target - guesses[guesses.length - 2]);
      const currDiff = Math.abs(target - guess);
      console.log(currDiff < prevDiff ? "WARMER!" : "COLDER!");
    }

    askGuess(); // continue game
  });
}

askGuess();
