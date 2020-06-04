/* main.js
* En lugar de codigo.js porque para qué pornerle un nombre así si se puede seguir
* una norma no "escribida".
*/

/* El factorial de un número entero n es una operación matemática que consiste
* en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el
* factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
*
* Utilizando la estructura for, crear un script que calcule el factorial de un
* número entero.
*/

var numero = prompt("Deme un numerico entero, si a vuesa merced le place");

if (numero%1 != 0) {
  alert ("Por favor, no se porte mal con un servidor, que lo que me han de pedido que le de pida es un numero entero, sin decimales.");
} else {
  var factorial = 1;
  for (var i = numero; i > 1; i--) { // tb var i = 1; i <= numero, i++
    factorial = factorial*i;
  }
  alert(factorial);
}
