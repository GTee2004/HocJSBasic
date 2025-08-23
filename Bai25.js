const sv1 = {
    score: 10,
    name : "Thành",
    address: {
        city: "Hà Nội",
        country: "Việt Nam"
    }
}

const sv2 = {
    score: 4,
    name : "Trung",
    address: {
        city: "Hà Nội",
        country: "Việt Nam"
    }
}

const sv3 = {
    score: 6,
    name : "Nam",
    address: {
        city: "Hà Nội",
        country: "Việt Nam"
    }
}

const sv = [sv1, sv2, sv3];

console.log("SV: " , sv)

// sv.forEach((value, index) => {
//     console.log(`SV[${index}]: ${value.name} - ${value.score} - ${value.address.city}, ${value.address.country}`);
// });

const person = {
    email: "giathanh@gmail.com",
    name: "Trần Gia Thành",
    age: 20
}

for(let key in person){
    console.log(key, person[key]);
}

// for(let value of Object.values(person)){
//     console.log(value);
// }

for(let [key, value] of Object.entries(person)){
    console.log(key, value);
}