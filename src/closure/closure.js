function greeting(){
    let userName = 'Deysi';

    return function displayUserName(){
        return `Hello ${userName}`;
    }   
}

const g = greeting();

console.log(g);
console.log(g());