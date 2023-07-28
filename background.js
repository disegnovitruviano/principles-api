// Event listener for the browser action click
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fetchAndDisplayDesignPrinciples,
  });
});

// Function to fetch and display design principles
function fetchAndDisplayDesignPrinciples() {
  fetch('http://localhost:3000/api/design-principles')
    .then(response => response.json())
    .then(principles => {
      const principlesContainer = document.createElement('div');

      principles.forEach(principle => {
        const principleElement = document.createElement('div');
        principleElement.textContent = principle.title;
        principlesContainer.appendChild(principleElement);
      });

      chrome.action.setPopup({ tabId: tab.id, popup: principlesContainer.outerHTML });
    })
    .catch(error => console.error(error));
}
