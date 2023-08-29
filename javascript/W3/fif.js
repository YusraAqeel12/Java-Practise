const prompt = require("prompt-sync")();
let number = prompt("The Number is ")
let parsedNumber = parseInt(number)
let squareroot = Math.sqrt(parsedNumber)
console.log(squareroot , " is the square root of " , number)