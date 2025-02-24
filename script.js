function startVideo() {
    document.getElementById("welcome-page").classList.add("hidden");
    document.getElementById("video-container").classList.remove("hidden");
    document.getElementById("birthday-video").play();
}

document.getElementById("birthday-video").addEventListener("ended", function() {
    document.getElementById("video-container").classList.add("hidden");
    document.getElementById("music-card").classList.remove("hidden");
});

setTimeout(function() {
    document.getElementById("music-card").classList.add("hidden");
    document.getElementById("questions").classList.remove("hidden");
}, 15000);

document.getElementById("questions").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("questions").classList.add("hidden");
    document.getElementById("lantern-surprise").classList.remove("hidden");

    setTimeout(function() {
        document.getElementById("lantern-surprise").classList.add("hidden");
        document.getElementById("poem-scroll").classList.remove("hidden");
    }, 10000);

    setTimeout(function() {
        document.getElementById("poem-scroll").classList.add("hidden");
        document.getElementById("final-slide").classList.remove("hidden");
    }, 20000);
});
