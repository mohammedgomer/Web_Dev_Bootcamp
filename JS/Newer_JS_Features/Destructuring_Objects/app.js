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

// Tedious syntax
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

//  This is going to make me five seperate variables 
const { email, firstName, lastName, city, bio } = user;

//  If I wanted to change the varibale name
const { born: birthYear } = user;

// Adding a default value
const { city, state, died = 'N/A' } = user2;