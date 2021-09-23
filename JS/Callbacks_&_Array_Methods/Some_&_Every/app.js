const exams = [85, 98, 92, 78, 77, 90, 89, 84, 81, 77];

//  Each element in the array will be passed into this callback,
// this callback will return true or false
exams.some(score => score >= 75);

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
  },
  {
    title: 'Parasite',
    score: 97
  },
  {
    title: 'Assasins Creed',
    score: 55
  }
]