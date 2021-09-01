const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// //  Standard for loop
// // More tedious and not as clean as using a for of loop, to iterate over items 
// // for (let i = 0; i < subreddits.length; i++) {
// //   console.log(`Visit reddit.com/r/${subreddits[i]}`);
// // }

// Much more cleaner & efficient than a standard for loop, when iterating over items
for (let sub of subreddits) {
  console.log(sub);
}


const seatingChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`)
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

//  Row references each element in the parent in the first array [], [], []
// Student references each item within those arrays
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}

// for (let char of "hello world") {
//   console.log(char);
// }