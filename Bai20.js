console.log("Hello World!");

const classes = ["Math", "Literature", "History", "Geography"];

console.log(classes, classes.length);

for (let i = 0; i < classes.length; i++) {
    console.log(i + ": " + classes[i]);
}
console.log("-----");
console.log("Foreach");
// for-each
classes.forEach(function (value, index) {  
    console.log(index + ": " + value);
});


console.log("-----");
classes.forEach((value, index) => {
    console.log(index + ": " + value);
});