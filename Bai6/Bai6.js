console.log('Hello, World!' .toUpperCase());
console.log('Hello, World!' .toLowerCase());
let a = 5; //int, float, double, long
let b = 6;
let c = 6.9
let d = '5'
let e = Number(d); // Chuyển đổi chuỗi sang số
let f = +d; // Chuyển đổi chuỗi sang số
console.log('e value: ', e, 'type: ', typeof e); // e value: 5 type: number
console.log(a + b); // 11
console.log(a + c); // 11.9
console.log(a + d); // 55 ngoại trừ toán tử cộng, toán tử khác nó sẽ convert sang kiểu số
console.log(a - d); // -1
console.log(a * d); // 25
console.log(a === d, 'a: ', typeof a, 'd: ', typeof d); // false, so sánh kiểu dữ liệu
console.log('f value: ', f, 'type: ', typeof f); // f value: 5 type: number