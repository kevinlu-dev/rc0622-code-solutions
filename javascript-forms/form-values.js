var contactQuery = document.getElementById('contact-form');

contactQuery.addEventListener('submit', function (event) {
  event.preventDefault();
  var formAll = {
    name: contactQuery.elements.name.value,
    email: contactQuery.elements.email.value,
    message: contactQuery.elements.message.value
  };
  console.log(formAll);
  document.getElementById('contact-form').reset();
});
