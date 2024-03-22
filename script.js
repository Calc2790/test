function searchWeb() {
  const searchQuery = document.getElementById('searchQuery').value;
  const selectedBrowser = document.getElementById('browserSelection').value;
  
  // Make an API call to backend with searchQuery and selectedBrowser
  fetch(`/search?query=${searchQuery}&browser=${selectedBrowser}`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Display search results on the console or update UI
    })
    .catch(error => console.error('Error:', error));
}
