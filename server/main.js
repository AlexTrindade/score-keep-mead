import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  // console.log(process.env.ROOT_URL);
});


// let square = function(x) {
//   return x * x;
// }

// let square = (x) => x * x;
// console.log(square(10));

// let user = {
//   name: 'Alex',
//   sayHi: function() {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//     // console.log(arguments);
//   }
// }
// user.sayHi(1,2);

// let numbers = [9,99,4, 56];
// let newNumbers = numbers.map((number) => number + 1);
// console.log(numbers);
// console.log(newNumbers);


// SPREAD OPERATOR
// let user = {
//   name: 'Alex',
//   location: 'Petrolina',
//   age: 0
// }
// let person = {
//   age: 25,
//   ...user
// }
// console.log(person);

// OBJECT PROPERTY SHORTHAND

// let bike = 'scott';
// let stuff = {
//   bike
// }

// console.log(stuff);

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// }
//
// let yearBuilt = 1995;
//
//
// console.log({
//   ...house,
//   bedrooms: 3,
//   yearBuilt,
//   flooring: 'Carpet'
// });
