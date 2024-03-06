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

// Array a partir de una cadena de texto usando el método String.split( )

let cadenaTexto = "Hola, Como estan";
let arrayDeCadena = cadenaTexto.split(', ');
console.log(arrayDeCadena);

// Array combinando dos arrays existentes utilizando el operador spread ( ... ):

let array1 = [2, 4, 6];
let array2 = [8, 10, 12];

let arrayCombinado = [...array1, ...array2];

console.log(arrayCombinado); 

// Array con valores únicos utilizando el método Set() y el operador spread ( ... )

let arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
let arraySinDuplicados = [...new Set(arrayConDuplicados)];

console.log(arraySinDuplicados); 

// Array con una función que genere valores dinámicamente:

function generarArray(longitud) {
    let array = [];
    for (let i = 0; i < longitud; i++) {
        array.push(i * 2);
    }
    return array;
}

let miArray = generarArray(5);
console.log(miArray); 

// Obtener la longitud de un array

let iArray = [1, 2, 3, 4, 5];
let longitud = iArray.length;

console.log("La longitud del array es: " + longitud); 

// Agregar elementos al final del array usando push( ) 

let lArray = [1, 2, 3];
console.log("Array original: " + lArray); 

lArray.push(4);
console.log("Array después de agregar 4: " + lArray); 

lArray.push(5, 6);
console.log("Array después de agregar 5 y 6: " + lArray); 

// Eliminar el último elemento del array usando pop( )

let liArray = [1, 2, 3, 4, 5];
console.log("Array original: " + miArray); 

let ultimoElementoEliminado = liArray.pop();
console.log("Elemento eliminado: " + ultimoElementoEliminado); 

console.log("Array después de eliminar el último elemento: " + liArray); 

// Agregar elementos al principio del array usando unshift( )

let numeros = [3, 4, 5];
console.log("Array original: " + numeros); 

numeros.unshift(2);
console.log("Array después de agregar 2 al principio: " + numeros); 

numeros.unshift(1);
console.log("Array después de agregar 1 al principio: " + numeros); 

// Eliminar el primer elemento del array usando shift( )

let lnumeros = [1, 2, 3, 4, 5];
console.log("Array original: " + lnumeros); 

let primerElementoEliminado = lnumeros.shift();
console.log("Primer elemento eliminado: " + primerElementoEliminado); 

console.log("Array después de eliminar el primer elemento: " + lnumeros); 

// Obtener una porción del array usando slice( )

let inumeros = [1, 2, 3, 4, 5];
console.log("Array original: " + inumeros);

let porcion = inumeros.slice(1, 4);
console.log("Porción del array: " + porcion); 
