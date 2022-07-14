var tabContLocation = document.querySelector('.tab-container');
var tabNodeList = document.querySelectorAll('.tab');
var viewNodeList = document.querySelectorAll('.view');

tabContLocation.addEventListener('click', function (event) {
  var eventTarget = event.target;
  if (eventTarget.matches('.tab')) {
    for (let i = 0; i < tabNodeList.length; i++) {
      if (eventTarget === tabNodeList[i]) {
        tabNodeList[i].setAttribute('class', 'tab active');
      } else if (eventTarget !== tabNodeList[i]) {
        tabNodeList[i].setAttribute('class', 'tab');
      }
    }
  }
  if (eventTarget.matches('.tab')) {
    var dataViewAttribute = eventTarget.getAttribute('data-view');
    for (let i = 0; i < viewNodeList.length; i++) {
      var nodeListAttribute = viewNodeList[i].getAttribute('data-view');
      if (dataViewAttribute === nodeListAttribute) {
        viewNodeList[i].setAttribute('class', 'view');
      } else if (dataViewAttribute !== nodeListAttribute) {
        viewNodeList[i].setAttribute('class', 'view hidden');
      }
    }
  }
});
