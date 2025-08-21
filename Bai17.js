console.log("Bai17");

// Keyword return

const sum = (a, b, c) => {
    console.log("code before return");
    if (typeof a != "number"){
        console.log("run empty return");
        return;
    }
    console.log("code after return");
    return a + b + c;
}

console.log(sum("Thanh", 2, 3));
