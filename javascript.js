var v1 = {};
console.log(v1, '-', typeof(v1));

var v2 = new Object();
console.log(v2, '-', typeof(v2));

v1.propriedade = 'valor';
console.log(v1, '-', typeof(v1.propriedade));

v1.propriedade = 2;
console.log(v1, '-', typeof(v1.propriedade));

v1.propriedade = true;
console.log(v1, '-', typeof(v1.propriedade));

v1.metodo = function() {
    console.log('método 1');
};
v1.metodo();

v1.metodo = function() {
    console.log('método 2');
};
v1.metodo();
v1.metodo = 'propriedade';
console.log(v1.metodo);

v1 = {};
console.log(v1, '-', typeof(v1));

// Formato literal
v1 = {
    propriedade: 'valor',
    metodo: function() {
        console.log('método');
    }
};
v1.metodo();

// Formato com new 
v2 = new Object();
v2.propriedade = 'valor';
v2.metodo = function() {
    console.log('método');
};
v2.metodo();

console.log(v2);
delete v2.propriedade;
console.log(v2);
delete v2.metodo;
console.log(v2);