// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// numbers.forEach(function (el) {
//   if (el % 2 == 0) {
//     console.log(el)
//   }

// })

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

//  Simply providing a function to forEach & saying hello forEach, heres a function I would like you to call 
//  We're not executing this function, we're just defining it 
movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
})

