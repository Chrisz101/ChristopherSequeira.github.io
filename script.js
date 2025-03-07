document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("theme-button");
    const body = document.body;

    // Check user preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeButton.innerText = "☀️ Light Mode";
    }

    themeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeButton.innerText = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeButton.innerText = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });
});
