console.log('hello, world');

var dqsHeading = document.querySelector('h1');
console.log('$heading:', dqsHeading);
console.dir(dqsHeading);

var dqsId = document.querySelector('#explanation');
console.log('$explanation: ', dqsId);
console.dir(dqsId);

var dqsClass = document.querySelector('.hint');
console.log('$hint: ', dqsClass);
console.dir(dqsClass);

var dqsaParagraphs = document.querySelectorAll('p');
console.log('$paragraphs: ', dqsaParagraphs);

var dqsaClass = document.querySelectorAll('.example-link');
console.log('$exmaple-link: ', dqsaClass);
