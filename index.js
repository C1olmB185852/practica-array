// Crear un array vacío

let arrayVacio = [ ];

// Array con elementos

let arrayConElementos = [1, 2, 3];

// Array con elementos de diferentes tipos de datos:

let arrayConElementosDiferentes = [1, 'Daniel', false];

// Array utilizando el constructor Array():

let arrayConConstructorArray = new Array(5, 'cuatro', true);

// Array con una secuencia numérica usando el método Array.from( )

let secuenciaNumerica = Array.from({length: 10}, (_, index) => index);
console.log(secuenciaNumerica); 

// Array mediante la repetición de un valor utilizando el método Array.fill( ) 

let arrayRepetido = new Array(5).fill('Hola');
console.log(arrayRepetido); 