const element = document.getElementById('myButton');

const handleClick = () => {
    console.log("Button clicked");
}

element.addEventListener("click", handleClick);

// element.addEventListener("click", function() {
//     console.log("Button clicked!");
// });

console.log(element);