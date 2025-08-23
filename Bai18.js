console.log("Hello World!")

// global scope
// function scope
// block scope

let global = "Global"

function show(){
    console.log(global);
}

function showLocal() {
    let local = "Function";
    console.log("Hi " + local);
}

show();
showLocal();
