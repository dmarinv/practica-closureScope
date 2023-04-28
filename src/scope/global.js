var a; //declaración
var b = 'b'; //declaración y asignación
b = 'bb'; //reasignación
var a = 'aa' //redeclarando

//Global scope
var fruit = 'Apple'; //global
function bestfruit(){
    console.log(fruit);
}

bestfruit();

function countries(){
    country = 'Colombia'; //estamos asignando un valor, sin haber creado la variable, eso implica que la variable queda como global.
    console.log(country);
}

countries();
console.log(country);
