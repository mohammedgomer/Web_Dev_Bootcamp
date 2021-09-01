// let num = 1;

// while (num <= 500) {
//   console.log(num);
//   num++;
// }

// const SECRET = "BabyHippo";


// let guess = prompt("enter the secret code...")
// while (guess !== SECRET) {
//   guess = prompt("enter the secret code...")
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!");

// let input = prompt("Hey, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") {
//     break;
//   }
// }
// console.log("OK YOU WIN!");

// Prompting user to enter maximum number
// Converting string into int, so that we know if a valid number was entered on not 
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter the maximum number!"));

}

// Generating a random number from 0.1 to the maximum number the user entered
const targetNum = Math.floor(Math.random() * maximum) + 1;

//  Prompting user to enter there guess of the random number generated 
let guess = parseInt(prompt("Enter your first guess!"));
// Attempts user has guessed, starts at 1 attempt
let attempts = 1;

//  While the guess is incorrect his loop runs
while (parseInt(guess) !== targetNum) {
  //  If we enter 'q' on the keyboard the game will stop (stopping the loop)
  if (guess === 'q') break;
  //  The attempts variable increments each time we go through it, as the guess is incorrect
  attempts++;
  if (guess > targetNum) {
    // If the answer is too high, we prompt the user to enter a new value
    guess = (prompt("Too high! Enter a new guess:"));
  } else {
    // If the answer is too low, we prompt the user to enter a new value
    guess = (prompt("Too low! Enter a new guess:"));
  }
}
if (guess === 'q') {
  console.log("OK, YOU QUIT")
} else {
  console.log("CONGRATS, YOU WIN!");
  console.log(`You got it! It took you ${attempts} guesses`);
}