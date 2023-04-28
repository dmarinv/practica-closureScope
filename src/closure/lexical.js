const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myNumber);

    function parent(){ //función interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }

    return parent();
}

myFunction();

function sumWithClosure(firstNum = 0 ) {
    return function sumar(secondNum = 0) {
        return firstNum + secondNum;
    }
  }

  const suma = sumWithClosure();
  console.log(suma(20));