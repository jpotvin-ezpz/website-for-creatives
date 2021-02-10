const projects = document.querySelectorAll('.project');

function toggleOpen() {
  this.classList.toggle('open')
}
function toggleText(e) {
  if (e.propertyName === 'flex-grow' || e.propertyName === 'flex') {
    this.classList.toggle('open-active');
  }
}

projects.forEach(project => project.addEventListener('click', toggleOpen));
projects.forEach(project => project.addEventListener('transitionend', toggleText));