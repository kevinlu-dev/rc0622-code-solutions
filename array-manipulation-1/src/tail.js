/* exported tail */

// define a function
// declare a var and assign it to a new empty array.
// loop through the array starting from the index 1.
// and push to the new array.
// then return the new array.

function tail(array) {
  var noFirst = [];
  for (var i = 1; i < array.length; i++) {
    noFirst.push(array[i]);
  }
  return noFirst;
}

// define a function
// declare a var and assign it to a new empty array.
// loop through the array starting from the index 1.
// and push to the new array.
// then return the new array.
