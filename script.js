document.addEventListener("DOMContentLoaded", function() {
    var links = [
        "https://www.youtube.com/shorts/V2yiAZlGaLw",
        "https://www.youtube.com/shorts/lQ5fuec_C70",
        "https://www.youtube.com/shorts/kjJljHCh8MM",
        "https://www.youtube.com/shorts/qwlWNPHQkDo",
        "https://www.youtube.com/shorts/D_Hz30ZH38E"
    ];

    var image = document.getElementById("randomImage");

    image.addEventListener("click", function() {
        var randomIndex = Math.floor(Math.random() * links.length);
        window.location.href = links[randomIndex];
    });
});