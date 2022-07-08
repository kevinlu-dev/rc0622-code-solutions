/* exported reverse */

// define a function
// declare a var and assign it to a new empty array.
// loop through the array from the last index / var i = array.length -1; i >= 0; i--.
// and push to the new array.
// then return the new array.

function reverse(array) {
  var inReverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    inReverse.push(array[i]);
  }
  return inReverse;
}

// define a function
// declare a var and assign it to a new empty array.
// loop through the array from the last index / var i = array.length -1; i >= 0; i--.
// and push to the new array.
// then return the new array.
