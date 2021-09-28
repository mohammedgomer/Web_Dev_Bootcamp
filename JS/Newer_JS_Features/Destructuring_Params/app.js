const user = {
  email: 'harvey@gmail.com',
  password: 'password123',
  firstName: 'Harvey',
  lastName: 'Milk',
  born: 1930,
  died: 1978,
  bio: 'Harvey Bernard Milk was an Amercian Politician based  in California',
  city: 'San Francisco',
  state: 'California'
}

const user2 = {
  email: 'Stacy@gmail.com',
  firstName: 'Stacy',
  lastName: 'Gonzales',
  born: 1987,
  city: 'Tulsa',
  state: 'Oklahoma'
}

// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`
// }

//  Not a huge improvement, but a bit cleaner
//  If we had a lot we were doing with firstname and lastname it would be nicer
function fullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}


const movies = [
  {
    title: 'Goodfellas',
    score: 98,
    year: 1989
  },
  {
    title: 'Friday',
    score: 90,
    year: 1997
  },
  {
    title: 'Snakes On A Plane',
    score: 60,
    year: 2008
  },
  {
    title: 'Batman Returns',
    score: 88,
    year: 2000
  }
]

// movies.filter((movie) => movie.score >= 90);
movies.filter(({ score }) => score >= 90);

// movies.map((movie => {
//   return `${movie.title} (${movie.year}) is rated ${movie.score}`;
// }))

// Imporvement compared to the above syntax
movies.map(({ title, score, year }) => {
  return `${title} (${year}) is rated ${score}`;
})

