
/*function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}

moneyBox(5);*/

function moneyBox(){
    let saveCoins = 0;

    return function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(5);
moneyBoxAna(20);
moneyBoxAna(35);

function createPetList() {
    let pets = [];
    return function lista(pet) {
        if (pet) {
            pets.push(pet);
            console.log(pets);
            return pets;
          } else {
            console.log(pets);
            return pets;
          }
    }
  }

  const myPetList = createPetList();
  myPetList("michi");
  myPetList({"age": 3, "description": "A nice cat", "name": "Michi", "type": "cat", "weight": "2kg"}, {"age": 6, "description": "A good dog", "name": "firulais", "type": "dog", "weight": "15kg"});
  myPetList();