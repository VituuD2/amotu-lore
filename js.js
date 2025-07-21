let button_1 = document.querySelector(".button1");

button_1.addEventListener("click", () => {
    window.open("sec_page.html", target="_self");
});

let spotify_button = document.querySelector('.spotify-button');

spotify_button.addEventListener('click', () => {
    window.open("https://open.spotify.com/intl-pt/track/6Zq0m2q09khefAnsZWlPr0?si=82c8b33e2e7d4aa6", target="_blank");
});
