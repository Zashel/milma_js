/*
* main.js
* En lugar de codigo.js porque para qué pornerle un nombre así si se puede seguir
* una norma no "escribida".
*/

/*
* Definir una función que determine si la cadena de texto que se le pasa como
* parámetro es un palíndromo, es decir, si se lee de la misma forma desde la
* izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos
* aporto otro paso natural".
*/

// Vamos a por la  función
function es_palindromo(texto) {
  // Vamos a obviar las separaciones del principio y del final...
  texto = texto.trim();
  // Y lo pasamos a minúsculas, porque patatas
  texto = texto.toLowerCase();
  // Y le quitamos los espacios en blanco dentro.
  texto = texto.split(" ").join("");
  // No veo un método que lo de la vuelta directamente, así que vamos a lo básico
  // y a usar el mayor numero de métodos de texto
  var length = texto.length; // Necesitamos la longitud total
  var impar = length % 2; // Y si hay un número par o impar de letras.
  // Con un número impar de letras la del medio nos da igual, la verdad.
  var mitad = (length-impar) / 2;
  // Si impar es 1, o si es impar, al quitarle este le quito la parte decimal de la división
  // El total de caracteres (length) es igual a dos mitades más 1 si es impar.
  var mitad_1 = texto.slice(0, mitad); // Ya tengo una mitad
  var mitad_2 = texto.slice(mitad+impar, length); // Y la segunda mitad
  var mitad_2_inversa = ""; // Cogemos esta
  for (i=mitad_2.length-1; i >= 0; i--) {
    // Le damos la vuelta
    mitad_2_inversa = mitad_2_inversa + mitad_2[i];
  }
  console.log(mitad_1, mitad_2, mitad_2_inversa); // Esto sirve para hacer debug
  if (mitad_1 == mitad_2_inversa) {
    alert("Es palindromo!");
  } else {
    alert("No es palindromo!");
  }
}

// Lo probamos, porque es mu compleja

var texto = prompt("Dame un palindromo, tigre.")
// Lo guardo en variable porque hay una forma más fácil de hacerlo, luego veréis.
es_palindromo(texto);
