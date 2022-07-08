/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
      newArray.push('odd');
    } else {
      newArray.push('even');
    }
  }
  return newArray;

}
