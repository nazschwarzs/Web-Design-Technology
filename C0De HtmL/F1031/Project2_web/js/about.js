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

document.getElementById('videoButton').addEventListener('click', function () {
    var videoContainer = document.getElementById('videoContainer');
    if (videoContainer.style.display === 'none') {
        videoContainer.style.display = 'block';
        document.getElementById('youtubeVideo').src += "&autoplay=1";
    } else {
        videoContainer.style.display = 'none';
        document.getElementById('youtubeVideo').src = document.getElementById('youtubeVideo').src.replace("&autoplay=1", "");
    }
    
    // Redirect to the YouTube website
    window.location.href = "https://www.youtube.com/watch?v=AbE9Q8msJaU";
});
