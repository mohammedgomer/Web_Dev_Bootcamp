const exams = [85, 98, 92, 78, 77, 90, 89, 84, 81, 77];

//  Each element in the array will be passed into this callback,
// this callback will return true or false
exams.some(score => score >= 75);

const movies = [
  {
    title: 'Goodfellas',
    score: 98,
    year: 1985
  },
  {
    title: 'Friday',
    score: 90,
    year: 1997
  },
  {
    title: 'Snakes On A Plane',
    score: 60,
    year: 2006
  },
  {
    title: 'Batman Returns',
    score: 88,
    year: 2001
  },
  {
    title: 'Parasite',
    score: 97,
    year: 2020
  },
  {
    title: 'Assasins Creed',
    score: 55,
    year: 2015
  }
]



const newMovies = movies.some(movie => movie.year > 2015);

