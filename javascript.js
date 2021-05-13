var v1 = [];
console.log(v1, '-', typeof(v1));

var v2 = new Array();
console.log(v2, '-', typeof(v2));

v1.push('string');
v1.push(true);
v1.push(2);

console.log(v1);

const ultimo = v1.pop();
console.log(ultimo);
console.log(v1);

const primeiro = v1.shift();
console.log(primeiro);
console.log(v1);

v2.push(1, 2, 3, 4, 5);
console.log(v2);

v2.splice(0, 3);
console.log(v2);

v2.splice(0, 1);
console.log(v2);


