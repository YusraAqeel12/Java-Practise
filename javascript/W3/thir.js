const prompt = require("prompt-sync")();

let first = parseFloat(prompt("Enter the first number "))
let second = parseFloat(prompt("Enter the second number "))
let opr = prompt("Enter the Operator ")
switch (opr){
    case "+":
    var res= first + second;
    console.log(`The result is ${res}`)
    break

    case"-":
    var res = first - second
    console.log(`The result is ${res}`)

    default:
        console.log("Invalid")

}