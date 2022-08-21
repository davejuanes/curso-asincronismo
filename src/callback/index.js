function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) { // podemos utilizar  cualquier nombre en vez de callback 
    return callback(num1, num2)
}

console.log(calc(2, 2, sum));

// Ejemplo 2 - setTimeOut

setTimeout(function () {
    console.log('Hola JavaScript');
}, 2000)

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Dave');