var three = 3;
var two = 2;
var one = 1;

var maximumValue = Math.max(one, two, three);

console.log('maximumValue:', maximumValue);

var heroes;
heroes = ['Goku', 'Vegeta', 'Gohan', 'Trunks'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var bookOne = {
  title: 'book title 1',
  author: 'author 1'
};

var bookTwo = {
  title: 'book title 2',
  author: 'author 2'
};

var bookThree = {
  title: 'book title 3',
  author: 'author 3'
};

var library;
library = [bookOne, bookTwo, bookThree];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log(library);

var fullName = 'Kevin Lu';

var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
