console.log("alert")

const element = document.getElementById("login");

element.addEventListener("click", () => {
    console.log("Button clicked!");
    alert("Login successful!");
});