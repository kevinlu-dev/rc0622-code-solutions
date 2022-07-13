function handleFocus(event) {
  console.log('focus event was fired', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var nameQuery = document.getElementById('user-name');
var emailQuery = document.getElementById('user-email');
var textAreaQuery = document.getElementById('user-message');

nameQuery.addEventListener('focus', handleFocus);
nameQuery.addEventListener('blur', handleBlur);
nameQuery.addEventListener('input', handleInput);

emailQuery.addEventListener('focus', handleFocus);
emailQuery.addEventListener('blur', handleBlur);
emailQuery.addEventListener('input', handleInput);

textAreaQuery.addEventListener('focus', handleFocus);
textAreaQuery.addEventListener('blur', handleBlur);
textAreaQuery.addEventListener('input', handleInput);
