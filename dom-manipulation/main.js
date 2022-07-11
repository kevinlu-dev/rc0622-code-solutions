var buttonClicked = 0;

var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function (event) {
  clickCount.textContent = 'Clicks: ' + buttonClicked++;

  if (buttonClicked <= 4) {
    hotButton.className = 'hot-button cold';
  }

  if ((buttonClicked <= 7) && (buttonClicked > 4)) {
    hotButton.className = 'hot-button cool';
  }

  if ((buttonClicked <= 10) && (buttonClicked > 7)) {
    hotButton.className = 'hot-button tepid';
  }

  if ((buttonClicked <= 13) && (buttonClicked > 10)) {
    hotButton.className = 'hot-button warm';
  }

  if ((buttonClicked <= 16) && (buttonClicked > 13)) {
    hotButton.className = 'hot-button hot';
  }

  if (buttonClicked > 16) {
    hotButton.className = 'hot-button nuclear';
  }
});
