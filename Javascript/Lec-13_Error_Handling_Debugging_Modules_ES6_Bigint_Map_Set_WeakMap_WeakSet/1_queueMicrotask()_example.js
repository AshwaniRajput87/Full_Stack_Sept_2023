const searchInput = document.getElementById('search-input');
const suggestionList = document.getElementById('suggestion-list');

searchInput.addEventListener('input', handleInputChange);

function handleInputChange(event) {
  const inputValue = event.target.value;

  // Clear the suggestion list immediately
  clearSuggestionList();

  // Fetch and populate the suggestion list asynchronously
  queueMicrotask(() => {
    fetchSuggestions(inputValue)
      .then(suggestions => {
        // Populate the suggestion list with fetched suggestions
        populateSuggestionList(suggestions);
      })
      .catch(error => {
        console.error('Error fetching suggestions:', error);
      });
  });
}

function fetchSuggestions(query) {
  // Simulate an asynchronous API request
  return new Promise(resolve => {
    setTimeout(() => {
      // Simulated API response with suggestions
      const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];
      resolve(suggestions);
    }, 300);
  });
}

function clearSuggestionList() {
  // Clear the suggestion list immediately
  suggestionList.innerHTML = '';
}

function populateSuggestionList(suggestions) {
  // Populate the suggestion list in the UI
  suggestions.forEach(suggestion => {
    const listItem = document.createElement('li');
    listItem.textContent = suggestion;
    suggestionList.appendChild(listItem);
  });
}
