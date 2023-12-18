///SEASON26///

// ejemplo 1
// recordar clase pasada
/*
for (let i = 10; 1 < 101; i += 10) {
    alert(i);
}
*/

// EJEMPLO 2
// LLENAR UNA CADENA DE TEXTO CON BUCLE

/*let texto = "";

for (let i = 1; i <= 10; i++){  
    texto += i + "<br  />"
}

console.log(texto);
document.getElementById("demo").innerHTML = texto;
*/

// EJEMPLO 3 
/*let texto = "";
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]

for (let i = 0; i < cars.length; i++){
    texto += cars[i] + "<br  />"
}

document.getElementById("demo").innerHTML = texto;*/

// EXTRA, ITERAR POR ELEMENTO

/*let texto = "";
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]

for (let i = 0; i < cars.length; i++){
    texto += cars[i] + "<br  />"
}

document.getElementById("demo").innerHTML = texto;*/

// CONTEO DEL 0 AL 5

/*let i = 0;

while(i <= 5) {
    console.log(i);
    i++;
}

console.log("BUCLE FINALIZADO")/*/

// DEL 10 AL 100

/*let i = 10

while(i <= 100) {
    console.log(i)
    i += 10
}*/

// NUMEROS PARES E IMPARES
//PAR
/*let i = 0, final = 100;

while (i <= final) {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++;
}*/

//IMPAR
/*let i = 0, final = 20;

while (i <= final) {
    if (i % 2 != 0) {
        console.log(i)
    }
    i++;
}*/

// RECORRER ARREGLO CON WHILE
/*let vocales = ['a', 'e', 'i', 'o', 'u'];
let i = 0;

while (i < vocales.length)
falta completar*/
 
///

/*let i = 10;

while (i < 5) {
    console.log("Hola");
    i++
}*/

/*let i = 10;

do {
    console.log(i);
    i++;
} while (i <= 5)*/

// PROMPT
/*let edad;
edad = prompt("Ingresa tu edad: ");

console.log(edad);*/

// REGEX EXPRESIONES REGULARES
/*const patron = /hola/;

let dato;

do {
    dato = prompt('Ingresa el valor: ');
} while(!patron.test(dato))

alert("PATRON ACERTADO")*/






///SEASON 27///

//CREAMOS NUESTRA PRIMERA FUNCION 

/*function escribir() {
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
    console.log("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ut repellendus, quis nobis cumque, vel odit, excepturi temporibus exercitationem consequuntur commodi ratione! Voluptatem, deserunt. Placeat voluptatibus labore repellendus aliquam deleniti.")
}

//LLAMAMOS A FUNCION
escribir();*/

// SALUDO CON PARAMETROS
/*function saludar(nombre) {
    console.log("================================");
    console.log(`Hola ${nombre}, bnuenas noches.`);
    console.log("================================");
}

//LLAMAMOS A LA FUNCION 
let nombre = prompt("Ingresa tu nombre: ");

saludar(nombre);*/

//OPERACIONES
/*function sumar(n1, n2) {
    console.log(n1 + n2);
}

sumar(56, 89)*/


/*function sumar(n1, n2) {
    return n1 + n2;
}

let resultado = sumar(56, 89); 

console.log(resultado);*/

/*
let saludar = nombre => console.log(`Hola ${nombre}, buenas noches.`);

saludar("LKnow");*/

//ARROW FUNCTION -> SUMAR
/*let sumar = (n1, n2) => n1 + n2

let resultado = sumar(23, 2345)

console.log(resultado)*/

//1 RESTA
/*bfunction restar(n1, n2) { 
    console.log(n1 - n2);
}

restar(33, 23)*/

//2
/*function restar(n1, n2) {
    return n1 - n2;
}

let resultado = restar(33, 23); 

console.log(resultado);*/

//1 MULTIPLICAR
/*function multiplicar(n1, n2) {
    console.log(n1 * n2);
}

multiplicar(45, 32)

//2
function multiplicar(n1, n2) {
    return n1 * n2;
}

let resultado = multiplicar(45, 32); 

console.log(resultado);*/

//1 DIV
/*

//2
function dividir(n1, n2) {
    return n1 / n2;
}

let resultado = dividir(23, 65); 

console.log(resultado);*/

