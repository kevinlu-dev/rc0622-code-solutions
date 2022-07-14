function handleClick(event) {
  if (event.target && event.target.tagName === 'BUTTON') {
    var eventTarget = event.target;
    var closestAncestor = eventTarget.closest('.task-list-item');
    console.log('closests ancestor: ', closestAncestor);
    console.log('event.target: ', event.target, 'event.target.tagNAme: ', event.target.tagName);
    closestAncestor.remove();
  }
}

var clickTask = document.querySelector('.task-list');
clickTask.addEventListener('click', handleClick);
