// key: value
let obj = {
    name: 'Thanh',
    address: 'Ha Noi',
    age: 21,
    // a: function() {
    //     console.log('Hello world inside function');
    //     return ''
    // }
};

let b = 'name';

console.log('type of b: ', typeof b);
obj[b] = 'Nguyen';
console.log('what is your name?' , `My name's: `, obj['name']);
console.log('what is your address?' , `My address's: `, obj.address);
console.log('what is your age?' , `My age's: `, obj.age);
//console.log('Call function a:', obj.a());