

// try {
//   // We try what we want to do 
//   hello.toUpperCase();
// } catch {
//   // If something goes wrong we catch
//   console.log('ERROR!!!!')
// }

// console.log('AFTER!');

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  }
  // We catch the error
  catch (e) {
    // Print out the error
    console.log(e);
    //  Then we print this message telling the user to pass a string
    console.log('Please pass a string!')
  }
}