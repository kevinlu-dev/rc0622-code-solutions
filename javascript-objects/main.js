var student = {
  firstName: 'Kevin',
  lastName: 'Lu',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Design';

console.log('value of student.livesInIrivine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student', student);

var vehicle = {
  make: 'Toyota',
  model: 'Rav4',
  year: 2015
};

vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Coco',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
