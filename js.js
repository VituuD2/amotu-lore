let button_1 = document.querySelector(".button1");

button_1.addEventListener("click", () => {
    window.open("sec_page.html", target="_self");
});

let spotify_button = document.querySelector('.spotify-button');

spotify_button.addEventListener('click', () => {
    window.open("https://open.spotify.com/intl-de/track/2plbrEY59IikOBgBGLjaoe?si=67a2c676db144a20", target="_blank");
});
