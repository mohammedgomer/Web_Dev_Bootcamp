const prices = [9.99, 1.50, 19.99, 1.00, 30.50];


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


// let total = 0;
// for (let price of prices) {
//   total += price;

// }
// console.log(total);

//  If I use reduce its the same idea
//  I'm just going about it in a different way

// 1. Pass in a callback 
// 2. Callback has two parameters
// 3. Paremeters are called accumulator (total) & second parameter represents each individual element in the array
const total = prices.reduce((total, price) => total + price);

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
})

const highestRated = movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

const evens = [2, 4, 6, 8];

evens.reduce((sum, num) => sum + num, 100);