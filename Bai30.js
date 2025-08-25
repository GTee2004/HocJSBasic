console.log("Video 30") 

const mybtn = document.getElementById("myButton");
const backButton = document.getElementById("backButton");
const myText = document.getElementById("myText");

console.log(mybtn, backButton, myText);

mybtn.addEventListener("click", () => {
    console.log("Clicked");
    myText.style.color = "red"
    myText.style.backgroundColor = "lightgray"
    myText.classList.add("textStyle")
})


backButton.addEventListener("click", () => {
    console.log("Back button clicked");
    myText.style.color = "black"
    myText.style.backgroundColor = "yellow"
});