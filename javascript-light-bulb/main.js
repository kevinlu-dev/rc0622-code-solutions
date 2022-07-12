var lightBulb = document.querySelector('.light-bulb');
var backgroundColor = document.querySelector('.bg-color');

lightBulb.addEventListener('click', function (event) {
  if (backgroundColor.className === 'bg-color lighton') {
    backgroundColor.className = 'bg-color lightoff';
  } else if (backgroundColor.className === 'bg-color lightoff') {
    backgroundColor.className = 'bg-color lighton';
  }

  if (lightBulb.className === 'light-bulb turnedon') {
    lightBulb.className = 'light-bulb turnedoff';
  } else if (lightBulb.className === 'light-bulb turnedoff') {
    lightBulb.className = 'light-bulb turnedon';
  }

});
