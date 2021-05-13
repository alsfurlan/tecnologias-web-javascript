const v1 = 'constante';
console.log(v1);

// não pode alterar o valor de tipos primitivos
// v1 = 'alterar';

const obj = {
    propriedade: 'valor'
};
console.log(obj);
obj.propriedade = 'valor 2';
console.log(obj);

// Não pode ser initializado novamente
// obj = {};
// obj = 'string';

delete obj.propriedade;
console.log(obj);


