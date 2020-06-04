/* main.js
* En lugar de codigo.js porque para qué pornerle un nombre así si se puede seguir
* una norma no "escribida".
*/

// Array to play with
var valores = [true, 5, false, "hola", "adios", 2];

// Determinar cuál de los dos elemenos de texto es mayor
var valor_1 = valores[4];
var valor_2 = valores[5];
var valor_2_es_mayor = valor_2 > valor_1;
alert("Adios es mas larga que hola");

/* Utilizando exclusivamente los dos valores booleanos del array, determinar
* los operadores necesarios para obtener un resultado true y otro resultado
* false
*/
var valor_true = valores[0]; // ¿En serio?
var valor_false = valores[2]; // ¿En serio, serio?
alert("Operaciones Booleanas");
alert(valor_true || valor_false); //Esto es Verdadero
alert(valor_true && valor_false); //Esto es Falso

/* Determinar el resultado de las cinco operaciones matemáticas realizadas con
* los dos elementos numéricos
*/
var valor_1 = valores[1]; // Reutiliza variables si solo sabes qué estás haciendo
var valor_2 = valores[5];
alert("Operaciones num\xE9ricas");
alert(valor_1 + valor_2);
alert(valor_1 - valor_2);
alert(valor_1 * valor_2);
alert(valor_1 / valor_2);
alert(valor_1 % valor_2);
