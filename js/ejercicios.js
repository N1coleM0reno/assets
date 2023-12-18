/* POTENCIA DE 2
crear un función uq te devuelva 2 elevado al numero 
que se le pasa como argumento

potenciaDos(3) -> 8
potenciaDos(5) -> 32
potenciaDos(10) -> 1024 */
//////////////////
/*let potenciaDos = exp => 2**exp;

console.log(potenciaDos(8));*/
////////////////
/*let potenciar = (base, exp) => base**exp;

console.log(potenciar(7, 3));*/

/*INVERTIR UN ARREGLO
Crear una funcion que reciba una arreglo y lo devuelva invertido 

invertirArreglo([0, 1, 2, 3, 4]) -> [4, 3, 2, 1, 0]*/

/*function invertirArreglo(arr) {
    let auxArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        auxArr.push(arr[i]);
    }

    return auxArr;
}

console.log(invertirArreglo([111, 222, 333]));*/

/* CONTAR VOCALES
Crear una funcion que resiva una cadena y muestre 
la cantidad de volcales que tiene

cortarVocales("hola") -> 2
cortarVocales("queso") -> 3 */

/*function contarVocales(str) {
    let contador = 0;

    for (let i = 0; i < str.length; i++) {

        switch (srt[i].toLowerCase()) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                contador++;
                break;
        }
    }

    return contador;
}*/

/* MAYOR DE TRES NUMEROS
Crear una funcion que reciba un arreglo de numeros 
y devuelva el mayor
*/

function numMax(nums) {
    let mayor = -999999;

    for (const num of nums) {
        if (num > mayor) {
            mayor = num;
        }
    }

    return mayor;
}

console.log(numMax([34, 67, -45, 87, 56, -23, 2]))


function numMin(nums) {
    let menor = 999999;

    for (const num of nums) {
        if (num < menor) {
            menor = num;
        }
    }

    return menor;
}

console.log(numMin([34, 67, -45, 87, 56, -23, 2]))