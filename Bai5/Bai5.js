let a = '1$2$3$4$5$6$7$8$9$10$11$12$13$14$15$16$17$18$19$20';

let b = a.split('$')
let c = a.substring(5, 20);
let d = a.replaceAll('$', ' ');
//let d = a.replace('$', ' '); => 1 2$3$4$5$6$7$8$9$10$11$12$13$14$15$16$17$18$19$20
console.log(b);
console.log(c);
console.log(d);