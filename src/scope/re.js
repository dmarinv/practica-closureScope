/** Declaración y Asignación con VAR **/

var firstName; //Undefined
firstName = 'Oscar'; //asignamos
console.log(firstName); //imprimimos valor asignado

var lastName = 'David'; //declarar y asignar
lastName = 'Ana'; //Reasignamos
console.log(lastName); //imprimimos valor reasignado

var secondName = 'David'; //declarar y asignar
var secondName = 'Ana'; //redeclaro y reasignar
console.log(secondName); //se imprime valor reasignado

/** Declaración y Asignación con VAR **/

let fruit = 'Apple'; // declara y asigna
fruit = 'Kiwi'; //reasigno
console.log(fruit);

//let fruit = 'Banana'; // con let no permite redeclarar
console.log(fruit);

/** Declaración y Asignación con VAR **/

const animal = 'dog'; //declara y asigna
animal = 'cat'; //const no puede ser reasignado
console.log(animal);
//const animal = 'bird'; //const no se puede redeclarar

const vehicles = [];
vehicles.push("🚗"); 
console.log(vehicles); //la referencia es al arreglo, no al item, por eso permite mostrar el valor.
vehicles.pop();
console.log(vehicles);