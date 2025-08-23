console.log("Hello World!")

// Array

const names = ["Thành", "Trung", "Hòa"]

console.log(names);
console.log("0: " + names[0]);
console.log("10: " + names[10]);

names[2] = "Upadate name";

console.log(names);

names.push("Trần", "Gia"); // Thêm cuối
names.unshift(null); // Thêm đầu
names.pop(); // Xóa cuối
names.shift(); // Xóa đầu
console.log(names);