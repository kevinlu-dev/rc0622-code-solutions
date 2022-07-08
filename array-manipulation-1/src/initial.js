/* exported initial */

// define a function
// declare a var and assign it to a new empty array.
// loop through the array stopping at the last index - array.length -1.
// and push to the new array.
// then return the new array.

function initial(array) {
  var lastElement = [];
  for (var i = 0; i < array.length - 1; i++) {
    lastElement.push(array[i]);
  }
  return lastElement;
}
