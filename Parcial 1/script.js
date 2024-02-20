document.getElementById("inputField").addEventListener("focus", function() {
    document.getElementById("message").textContent = "El campo de texto ha sido enfocado.";
});

document.getElementById("inputField").addEventListener("blur", function() {
    document.getElementById("message").textContent = "";
});