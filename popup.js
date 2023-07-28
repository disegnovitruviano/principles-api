// Fetch and display design principles
function fetchDesignPrinciples() {
  fetch('http://localhost:3000/api/design-principles')
    .then(response => response.json())
    .then(principles => {
      const principlesContainer = document.getElementById('principles-container');

      const ul = document.createElement('ul');
      principlesContainer.appendChild(ul);

      principles.forEach(principle => {
        const li = document.createElement('li');
        li.textContent = principle.title;
        ul.appendChild(li);
      });
    })
    .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', fetchDesignPrinciples);
