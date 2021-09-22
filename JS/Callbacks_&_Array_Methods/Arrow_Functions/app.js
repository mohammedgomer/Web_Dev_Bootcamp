// const add = (x, y) => {
//   return x + y;
// }

// const square = (x) => {
//   return x * x;
// }

// //  You still havie to have parameters wth nothing in them, 
// // even if you have no arguments to declare
// // const rollDie = () => {
// //   return Math.floor(Math.random() * 6) + 1;
// // }

// //  1. Remove the return keyword
// //  2. Instead of curly braces, use normal brackets - this tells JS,
// // I'm just returning this one thing. I don't need to write the return keyword, 
// // just automatically implicitlly return it for me 
// const rollDie = () => (
//   Math.floor(Math.random() * 6) + 1
// )

// // One liner 
// // Has two parameters & returns the sum of them - More efficient.
// const add = (a, b) => a + b


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

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map((movie) =>
  `${movie.title} - ${movie.score / 10}`
)