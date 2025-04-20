const execButton = document.getElementById("exec");
const popup = document.getElementById("expop");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("close");

execButton.addEventListener("click", () => {
    showPopup();
})

closeButton.addEventListener("click", () => {
    closePopup();
});

function showPopup() {
    popup.style.display = "flex";
    overlay.style.display= "block";
}

function closePopup() {
    popup.style.display="none";
    overlay.style.display="none";
}
