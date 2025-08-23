console.log("Filter")

const age = [10, 45, 23, 42, 18];

const agex2 = age.map((value, index) => value * 2);

const ageFilter = age.filter((value, index) =>{
    return value >= 18;
});
console.log(age);
console.log(agex2);
console.log(ageFilter);
