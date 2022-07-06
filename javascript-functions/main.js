function convertMinuteToSeconds(minutes) {
  var secondsToMinutes = minutes * 60;
  return secondsToMinutes;
}

var convertMinuteToSecondsResult = convertMinuteToSeconds(5);
console.log('convertMinuteToSecondsResult:', convertMinuteToSecondsResult);

function greet(name) {
  var greeting = '"Hey,' + ' ' + name + '"';
  return greeting;
}

var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var fullName = person;
  return fullName.firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('lastElementResult:', lastElementResult);
