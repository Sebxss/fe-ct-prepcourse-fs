/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   const resul = x + y;
   return resul;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   const res = x - y;
   return res 
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   const divi =  x / y;
   return divi;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   const multi = x * y ;
   return multi;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return  x % y;
}   

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
