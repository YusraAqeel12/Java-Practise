const prompt = require("prompt-sync")();

const FirstNumber = parseInt(prompt("Enter the first number "))
const SecondNumber = parseInt(prompt("Enter the second number "))
const ThirdNumber = parseInt(prompt("Enter the third number "))
const Maximum=Math.max(FirstNumber , SecondNumber ,ThirdNumber)
console.log("The Maximum Number is " , Maximum)