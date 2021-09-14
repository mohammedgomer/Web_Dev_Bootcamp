function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("ME");
}

function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName}`);
}

greet('George', 'Clooney');
// singSong();

function repeat(str, numTimes) {
  let result = '';
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}

function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }
  let sum = x + y;
  return sum;
  console.log("END OF FUNCTION!!!"); // THIS LINE WILL NEVER RUN
}

