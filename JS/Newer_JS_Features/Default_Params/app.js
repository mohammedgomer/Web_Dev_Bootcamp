function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

//  How about if I want a user to default numSides if they don't pass it in I want it to be 6
// rollDie()
// I get NaN

// Lets say I want to make message have a default value
// ORDER MATTERS 
//  If I do greet("Joaquin"); 
//  JS doesn't know Joaquin is a name, so the name 
//  parameter will return undefined
//  Make sure to put your non-default parameters first
//  In order to avoid this 
function greet(msg = "Hey there", person) {
  console.log(`${msg}, ${person}!`);

}