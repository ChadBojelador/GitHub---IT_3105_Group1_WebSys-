const message = document.getElementById("message");
const changeMessageButton = document.getElementById("change-message");
const changeBackgroundButton = document.getElementById("change-background");
let isMessageChanged = false;
let isBackgroundChanged = false;

changeMessageButton.addEventListener("click", () => {
    isMessageChanged = !isMessageChanged;
    message.textContent = isMessageChanged
        ? "Hello! Welcome to our webpage."
        : "Our group members are Chad Bojelador, Dan Fajarda, and Benson Ricohermoso.";
});

changeBackgroundButton.addEventListener("click", () => {
    isBackgroundChanged = !isBackgroundChanged;
    document.body.style.backgroundColor = isBackgroundChanged ? "#bae6fd" : "#ffffff";
});
