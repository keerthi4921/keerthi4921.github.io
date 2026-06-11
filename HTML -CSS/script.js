/*let name="Keerthi";
var age=22;
const city="Bangalore";
console.log(name);
console.log(age);
console.log(age+5);
console.log(age-5);
console.log(age*5);
console.log(age/5);
age+=3;
console.log(age);
age-=2;
console.log(age);
let age1=25;
console.log(age>age1);
console.log(age<age1);
console.log(age==age1);
console.log(age!=age1);
console.log(age>=age1);
console.log(age<=age1);*/
/*let num1=10;
let num2=20;
if(num1>num2){
    console.log("num1 is greater than num2");
} else {
    console.log("num1 is not greater than num2");
}*/
/*let i=1;*/
/*for(;i<=30;){
    console.log("Day"+i+"completed");
    i++;
}

*/
/*while(i<=30){
    console.log("Day"+i+"completed");
    i++;
}*/
/*let name="keerthi";
let password="keerthi123";
let name_1="sravani";
let password_1="sravani123";
if(name=="keerthi"){
    console.log("Name is correct");
    if(password=="keerthi123"){
        console.log("Password is correct");
    }
}*/

/*let members = 5;
let current = 1;
let giveGift = true;
let giftedCount = 0;
let lastReceiver = 0;

while (giftedCount < members) {
    if (giveGift) {
        giftedCount++;
        lastReceiver = current;
    }

    giveGift = !giveGift;

    current++;

    if (current > members) {
        current = 1;
    }
}

console.log(lastReceiver);*/ 
/*function cook ()

{
    console.log("pour the flour in tawa");
    console.log("Rub it around order with gareta"); 
    console.log("spill some oil above it then wait");
    console.log("twist it withdosa gareta");
    console.log("atlast getntly serve it to keerthi");
}
for (let i=1;i<=5;i++){
    cook();}*/
/*function num(n)

{
    if(n>19){
        return;
    }
    console.log(n);
    n+=1;
    num(n);
}
num(1);*/
/*function guess(n) {
    let userGuess = Number(prompt("Enter a number:"));

    if (userGuess == n) {
        console.log("Congratulations! You guessed the number.");
    } else if (userGuess < n) {
        console.log("Too low! Try again.");
        guess(n);
    } else {
        console.log("Too high! Try again.");
        guess(n);
    }
}
    

let number = Math.floor(Math.random() * 100) + 1;
guess(number);*/
let chocolates=["Dark Chocolate","Perk","Munch","KitKat",];
let sales={
    sneha:chocolates[0],
    navya:chocolates[1],
    hema:chocolates[2],
    chaitu:chocolates[3]

};
console.log(sales.sneha);