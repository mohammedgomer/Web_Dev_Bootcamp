// let bird = 'Scarlet Macaw';
// function birdWatch() {
//   let bird = 'Great Blue Heron';

// }
// console.log(bird);

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = 'HIII!';
// }

// console.log(radius);
// console.log(msg);

// for (var i = 0; i < 5; i++) {
//   var msg = 'RIKGNTJGN';
// }
// console.log(msg);

// function bankRobbery() {

//   const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];

//   function cryForHelp() {
//     function inner() {
//       for (let hero of heroes) {
//         console.log(`PLEASE HELP US, ${hero.toUpperCase}`);
//       }
//     }
//     inner();
//   }
//   cryForHelp();
// }

// Function statement, defining a function using the function keyword
// function add(x, y) {
//   return x + y;
// }

// Different way of defining a function by storing a function in a variable
// Although this time to call the function we don't use the name of the function, we use the name of the variable
// const add = function (x, y) {
//   return x + y;
// }

// function callTwice(func) {
//   func();
//   func();
// }

// function callTenTimes(f) {
//   for (let i = 0; i < 10; i++) {
//     f();
//   }
// }

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDie);

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("CONGRATS, I AM A GOOD FUNCTION");
//       console.log("YOU WIN A MILLION DOLLARS!!");
//     }
//   } else {
//     return function () {
//       alert("YOU HAVE BEEN INFECTED WITH A COMPUTER VIRUS!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//     }
//   }
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   }
// }

// const isChild = makeBetweenFunc(0, 18);
// console.log(isChild(7));

// const isAdult = makeBetweenFunc(19, 64);

// const isSenior = makeBetweenFunc(65, 120);

// function isBetween(num) {
//   return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//   return num >= 1 && num <= 10
// }

// const myMath = {
//   PI: 3.14159,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   }
// }

const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish fold',
  meow() {
    console.log(`${this.name} says MEOWWW`);
  }
}
