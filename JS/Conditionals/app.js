// Declaring a variable to store the random number in 
// let random = Math.random();

//  If the random number is less than 0.5 - print the number and say it is less than 0.5
// if (random < 0.5) {
//   console.log("YOUR NUMBER IS LESS THAN 0.5");
//   console.log(random);
// }

//  If the random number is greater than 0.5 - print the number and say it is greater than 0.5
// if (random >= 0.5) {
//   console.log("YOUR NUMBER IS GREATER THAN 0.5");
//   console.log(random);
// }

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//   console.log('UGHHH I HATE MONDAYS');
// } else if (dayOfWeek === 'saturday') {
//   console.log('YAY I LOVE SATURDAYS');
// } else if (dayOfWeek === 'friday') {
//   console.log('FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK');
// } else {
//   console.log('MEH');
// }



// 0-5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20 
// 65+ SENIOR $10
// const age = 9997;

// if (age < 5) {
//   console.log("You are a baby. You get in for free!");
// } else if (age < 10) {
//   console.log("You are a child. You pay $10");
// } else if (age < 65) {
//   console.log("You are an adult. You pay $20");
// } else {
//   console.log("You are a senior. You pay $10");
// }

const password = prompt("please enter a new password");

//  Password must be 6+ characters 
//  Password cannot include space 
if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Password cannot contain spaces!");
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}
