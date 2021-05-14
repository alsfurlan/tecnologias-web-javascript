var funcao1 = function() {
    console.log('funcao1');
};

let funcao2 = function() {
    console.log('funcao2');
};

const funcao3 = function() {
    console.log('funcao3');
};

function funcao4() {
    console.log('funcao4');
}

// Arrow function
const funcao5 = () => {
    console.log('funcao5')
}

funcao1();
funcao2();
funcao3();
funcao4();
funcao5();

console.log(typeof(funcao1));
console.log(typeof(funcao2));
console.log(typeof(funcao3));
console.log(typeof(funcao4));
console.log(typeof(funcao5));