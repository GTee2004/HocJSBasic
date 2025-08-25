console.log("Local Storage Example");

const btn = document.getElementById("myBtn");
const input = document.getElementById("name");

const prevE =document.getElementById("prev")
const previousName = localStorage.getItem("name"); 
if(previousName) {
    prevE.innerHTML = `Previous name: <b>${previousName}</b>`;
}

btn.addEventListener("click", () => {
    console.log(input.value)
    localStorage.setItem("name", input.value);
    document.getElementById("result").innerHTML = `<b>${input.value}</b>`;
});
