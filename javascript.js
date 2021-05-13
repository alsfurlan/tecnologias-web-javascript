var v1 = 'string';
let v2 = 'string';

// var não respeita escopo
if(true) {
    var v = 'teste';
}
console.log(v);

// let existe apenas dentro do escopo
if(true) {
    let l = 'teste';
}
console.log(l);

function soma(n1, n2) {
    var total = n1+n2;
}
soma(1, 2);
console.log(total);
