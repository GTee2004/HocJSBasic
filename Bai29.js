console.log("hello");

const element = document.getElementById("myButton");
const backButton = document.getElementById("backButton");

console.log(element);

const myText = document.getElementById("myText");

console.log(myText);

element.addEventListener("click", function() {
    console.log("Button clicked");
    myText.innerHTML = "Thành Đẹp Trai";
});

backButton.addEventListener("click", function() {
    console.log("Back button clicked");
    myText.innerHTML = "Trần Gia Thành - JS";
});
