// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// numbers.forEach(function (el) {
//   if (el % 2 == 0) {
//     console.log(el)
//   }

// })

// const movies = [
//   {
//     title: 'Goodfellas',
//     score: 98
//   },
//   {
//     title: 'Friday',
//     score: 90
//   },
//   {
//     title: 'Snakes On A Plane',
//     score: 60
//   },
//   {
//     title: 'Batman Returns',
//     score: 88
//   }
// ]

//  Simply providing a function to forEach & saying hello forEach, heres a function I would like you to call 
//  We're not executing this function, we're just defining it 
// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.score}/100`);
// })


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//  It's going to call this function on every element -> 1 * 2, 2 * 2, 3 * 2, etc. 
//  Then it sticks that into a new array [2, 4, 6, etc.]
//  Each element in the array is passed to the function, then added to a new array it constructs based upon our intial array - numbers. 
// Doesn't mutate an array or change an array, but it makes a new array for us. 
const doubles = numbers.map(function (num) {
  return num * 2;
})


const movies = [
  {
    title: 'Goodfellas',
    score: 98
  },
  {
    title: 'Friday',
    score: 90
  },
  {
    title: 'Snakes On A Plane',
    score: 60
  },
  {
    title: 'Batman Returns',
    score: 88
  }
]


const movieTitles = movies.map(function (movie) {
  return movie.title.toUpperCase();
})