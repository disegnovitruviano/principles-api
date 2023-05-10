// Fetch and display design principles
function fetchDesignPrinciples() {
  fetch('https://example.com/api/design-principles')
    .then(response => response.json())
    .then(principles => {
      const principlesContainer = document.getElementById('principles-container');

      principles.forEach(principle => {
        const principleElement = document.createElement('div');
        principleElement.textContent = principle.title;
        principlesContainer.appendChild(principleElement);
      });
    })
    .catch(error => console.error(error));
}

document.addEventListener('DOMContentLoaded', fetchDesignPrinciples);
