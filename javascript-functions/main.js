function convertMinuteToSeconds(minutes) {
  var secondsToMinutes = minutes * 60;
  console.log(secondsToMinutes);
}

convertMinuteToSeconds(5);

function greet(name) {
  var greeting = '"Hey,' + ' ' + name + '"';
  console.log(greeting);
}

greet('Beavis');

function getArea(width, height) {
  var area = width * height;
  console.log(area);
}

getArea(17, 42);

function getFirstName(person) {
  var fullName = person;
  console.log(fullName.firstName);
}

getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  console.log(lastElement);
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
