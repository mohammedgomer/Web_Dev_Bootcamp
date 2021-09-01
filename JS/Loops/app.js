// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Pirnt all even number up until 20
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// Print all odd numbers up until 20
// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// 100, 90, 80, 70, 60, until 0
// for (let i = 100; i >= 0; i -= 10) {
//   console.log(i);
// }

// INFINITE LOOP, DO NOT RUN, BAD
// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// }
// INFINITE LOOP, DO NOT RUN, BAD

// const names = [
//   'Callie',
//   'Dallas',
//   'Colt',
//   'Preston',
//   'June',
//   'Georgia',
//   'Magnolia',
//   'Ada',
//   'Presley',
//   'Arabella',
//   'Annabelle',
//   'Rylan',
//   'Cash',
//   'Jocelyn',
//   'Adelaide',
//   'Atticus',
//   'Reid',
//   'Maggie',
//   'Gunner',
//   'Alexandria',
//   'Travis',
//   'Wade',
//   'Lawson',
//   'Sterling',
//   'Marshall',
//   'Sullivan',
//   'Denver',
//   'Memphis',
//   'Porter',
//   'Winston',
//   'Scarlet'
// ]

// for (let i = 0; i < names.length; i++) {
//   console.log(i, names[i]);
// }

// for (let i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }


// 1 Run first loop
//   1 Run nested loop within that first loop 
//   2 Run nested loop within that first loop 
//   3 Run nested loop within that first loop 
// 2 Run second loop
//   1 Run nested loop within that second loop 
//   2 Run nested loop within that second loop 
//   3 Run nested loop within that second loop 
// This happens up until 10 as that's what we have set the first loop to
// for (let i = 0; i <= 10; i++) {
//   console.log(`i is: ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`j is: ${j}`);
//   }
// }

const seatingChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`)
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
