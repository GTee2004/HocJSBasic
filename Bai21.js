console.log("Map")

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// numbers.forEach((value, index) => {
//     console.log(index + ": " + value);
// })

const doubled = numbers.map((value, index) => {
    return value * 2;
})
const doubled2 = numbers.map((value, index) =>  value * 2);

console.log(doubled);
console.log(doubled2);