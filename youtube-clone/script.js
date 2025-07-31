const videos = [
    {
        id: "1",
        title: "Learn JavaScript in 10 Minutes",
        channel: "Code Academy",
        thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/hqdefault.jpg"
    },
    {
        id: "2",
        title: "CSS Grid Tutorial",
        channel: "DesignCourse",
        thumbnail: "https://i.ytimg.com/vi/jV8B24rSN5o/hqdefault.jpg"
    },
    {
        id: "3",
        title: "React Tutorial for Beginners",
        channel: "Traversy Media",
        thumbnail: "https://i.ytimg.com/vi/Dorf8i6lCuk/hqdefault.jpg"
    },
    {
        id: "4",
        title: "Node.js Crash Course",
        channel: "The Net Ninja",
        thumbnail: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg"
    },
    {
        id: "5",
        title: "Python Tutorial - Full Course for Beginners",
        channel: "freeCodeCamp.org",
        thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg"
    },
    {
        id: "6",
        title: "How to Build a Portfolio Website",
        channel: "Dev Ed",
        thumbnail: "https://i.ytimg.com/vi/6b7R8xv7v6k/hqdefault.jpg"
    }
];

const videoGrid = document.getElementById('videoGrid');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

function displayVideos(videoList) {
    videoGrid.innerHTML = '';
    if (videoList.length === 0) {
        videoGrid.innerHTML = '<p>No videos found.</p>';
        return;
    }
    videoList.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <img class="thumbnail" src="${video.thumbnail}" alt="${video.title}" />
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-channel">${video.channel}</div>
            </div>
        `;
        videoCard.addEventListener('click', () => {
            alert('Clicked video: ' + video.title);
        });
        videoGrid.appendChild(videoCard);
    });
}

function searchVideos() {
    const query = searchInput.value.toLowerCase();
    const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
    displayVideos(filteredVideos);
}

searchButton.addEventListener('click', searchVideos);
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchVideos();
    }
});

// Initial display of videos
displayVideos(videos);
