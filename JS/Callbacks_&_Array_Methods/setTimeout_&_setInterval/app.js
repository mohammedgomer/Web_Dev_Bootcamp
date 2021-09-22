// Expects a callback
// A number of seconds to delay the execution fo the function
// If we refresh the browser and wait for 3 seconds, the browser will print out 'HELLO!!!'.
// We have to pass in a callback, the whole point is that JS will wait to call whatever the function is, until the appropriate time

// console.log('HELLO!!!')

// setTimeout(() => {
//   console.log('Are you still there?')
// }, 3000);

// console.log('GOODBYE!!');

//  We save the value of setInterval in order to stop it 
//  Use clearInterval() and passn through that ID 

const id = setInterval(() => {
  console.log(Math.random())
}, 2000);



