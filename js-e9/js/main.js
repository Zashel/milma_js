/*
* main.js
* En lugar de codigo.js porque para qué pornerle un nombre así si se puede seguir
* una norma no "escribida".
*/

/*
* Definir una función que muestre información sobre una cadena de texto que se
* le pasa como argumento. A partir de la cadena que se le pasa, la función
* determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas
* o por una mezcla de ambas.
*/

// Esta nos va a dar si el texto es minúsculas, mayúsculas u otra cosa
function a_ver_es_m_o_M(texto) {
  // Na, no veo que haya un método que lo verifique, así que vamos al lío...
  if (!isNaN(texto)) { // Si es un número no hago na
    alert("Dame texto que quiero morir, oh dame textooo");
    return; // Y salimos de la función. Siempre hay que verificar que si lo que nos dan es lo que queremos.
  }
  if (texto == texto.toUpperCase()) { // Miramos si es igual a si mismo en mayúsculas
    alert("Tu texto esta en mayusculas."); // Me agotan las tildes a mano en js.
  } else if (texto == texto.toLowerCase()) { // Ahora si es igual a sí mismo en minúsculas
    alert("Tu texto esta en minusculas.");
  } else {
    alert("Tu texto es una combinacion de minusculas y mayusculas");
  }
}

// Y lo probamos porque somos unos linces

a_ver_es_m_o_M(prompt("Dime argo mi arma"));

/*
* a_ver_es_m_o_M significa: a ver, es minúsculas o Mayúsculas
* pero es que soy así
*/
