
// WILLKOMMENSNACHRICHT
window.addEventListener("load", function() {
    console.log("Willkommen auf der Andy-Schmid-Website!");
});


// NAVIGATION: MENÜ SCHLIESSEN BEIM KLICK
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Menüpunkt ausgewählt: " + link.textContent);
    });
});


// ANIMATION BEIM SCROLLEN
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    observer.observe(section);
});


// BUTTON: MEHR ÜBER ANDY SCHMID
const infoButton = document.querySelector("#infoButton");

if (infoButton) {
    infoButton.addEventListener("click", function() {
        alert(
            "Andy Schmid ist eine der grössten Legenden " +
            "des Schweizer Handballs!"
        );
    });
}


// AKTUELLES JAHR IM FOOTER
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}