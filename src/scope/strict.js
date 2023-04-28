'use strict'; //con ese modo, la variable no es creada
pi = 3.1416; 
console.log(pi); //se hace necesario crearla para poder asignarla e imprimirla.

function myFunction(){
    'use strict'; 
    return pi = 3.1416; //tampoco permitiría retornar esa variable porque no ha sido creada.
}

console.log(myFunction());