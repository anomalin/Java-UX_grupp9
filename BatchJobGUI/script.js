const execButton = document.getElementById("exec");
const popup = document.getElementById("expop");
const overlay = document.getElementById("overlay");

execButton.addEventListener("click", () => {
    showPopup();
})

function showPopup() {
    popup.style.display = "flex";
    overlay.style.display= "block";
}