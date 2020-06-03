/*
* main.js
* En lugar de codigo.js porque para qué pornerle un nombre así si se puede seguir
* una norma no "escribida".
*/

/*
* Escribir el código de una función a la que se pasa como parámetro un número
* entero y devuelve como resultado una cadena de texto que indica si el número
* es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

// Esta función devuelve si el número es par o impar.
function es_par(numerin) {
  // Comprobamos que el número sea real, porque si no, qué gracia
  if (numerin%1 != 0) {
    alert("Aaaamigo, que me des un numero real, ese no me vale.");
    return; // Y salimos de la función, porque no nos vale.
  } // podría poner un else, pero el return ya evita que se ejecute el resto

  var que_es = "par"; // defino la variable con uno de los valores
  if (numerin%2 == 1) { // compruebo si es impar, y si lo es, cambio el valor.
    que_es = "impar";
  }
  alert("El numerin que m'as dao es " + que_es + ".");
}

// Y lo probamos porque somos unos fieras

es_par(prompt("Ay mi arma, dame un numerin real que lo pueda cotejar..."));

// Como puedes comprobar, soy fan de la programación funcional.
