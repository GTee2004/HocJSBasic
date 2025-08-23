 console.log("Hello JS");

 const person = {
    name: "Thành",
    age: 21
 }

 console.log("Before:" ,person)
 // get data
 console.log(person.name)
 console.log(person.age)

 // set date
 person.address = "Hanoi"
 console.log("After:" ,person)

 // delete data
 delete person.age
 console.log("After delete:" ,person)