// function sum() {
// Doesn't work because arguments is not an rray
//   return arguments.reduce((total, el) => total + el);
// }

//  All values passed into the sum function will be
//  stored in nums 
// i.e sum(5,4,3,2,1) will all be in nums
//  Can have one value in it or a hundred values in it
// function sum(...nums) {
//   // Becomes an array
//   return nums.reduce((total, el) => total + el);
// }


function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE ${everyoneElse}`);
}