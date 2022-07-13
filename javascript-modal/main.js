var modal = document.querySelector('.modal');
var openButton = document.querySelector('.open-button');
var closeButton = document.querySelector('.close-button');

openButton.addEventListener('click', function (event) {
  if (modal.className === 'modal off') {
    modal.className = 'modal on';
  }
});

closeButton.addEventListener('click', function (event) {
  if (modal.className === 'modal on') {
    modal.className = 'modal off';
  }
});
