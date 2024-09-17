document.getElementById('searchButton').addEventListener('click', function () {
    var searchQuery = document.getElementById('searchInput').value.trim();
    if (searchQuery !== "") {
        // Open the search results in a new tab
        window.open("https://www.google.com/search?q=" + encodeURIComponent(searchQuery), '_blank');
    } else {
        // Show an alert or handle empty search query as needed
        alert("Please enter a search query.");
    }
});