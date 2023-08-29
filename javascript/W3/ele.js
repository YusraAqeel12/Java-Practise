//Factorial is the product from one to that number 
//1*2*3*4*5

const prompt = require("prompt-sync")();

let Num = parseInt(prompt("Enter the Number "))
var fact = 1
if (Num == 0 || Num < 0) {
    console.log("Your Number is either Negetive or greater than Zero")   
}
else {
    for (let i=1; Num>=i; i ++) {
        fact = fact*i     
    }
    console.log(`${fact} is the factorial of ${Num}`)
}