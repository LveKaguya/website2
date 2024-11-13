document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const modeToggleButton = document.getElementById("mode-toggle");

    // Load saved mode from localStorage
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
        body.classList.toggle("dark-mode", savedMode === "dark");
        modeToggleButton.textContent = savedMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    }

    // Toggle mode on button click
    modeToggleButton.addEventListener("click", () => {
        const isDarkMode = body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        modeToggleButton.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
    });
}); 
