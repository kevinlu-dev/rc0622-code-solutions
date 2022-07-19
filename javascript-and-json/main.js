var krBooks = [
  {
    isbn: '0385544383',
    title: 'The Plotters: A Novel',
    author: 'Kim Un-su'
  },

  {
    isbn: '0802158781',
    title: 'Love in the Big City',
    author: 'Park Sang Young'
  },

  {
    isbn: '1558612904',
    title: 'Violets',
    author: 'Shin Kyung-sook'
  }
];

console.log('books: ', krBooks, 'their types: ' + typeof krBooks);

console.log('stringify: ' + JSON.stringify(krBooks), 'their types :' + typeof JSON.stringify(krBooks));

var student = '{ "Number id": "12345", "String name": "Kevin" }';
console.log('string in JSON format: ', student, 'their type: ' + typeof student);

var studentParse = JSON.parse(student);
console.log('JSON Parse: ', studentParse, 'their type: ' + typeof studentParse);
