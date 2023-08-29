const prompt = require("prompt-sync")();

var first = parseInt(prompt("Enter first "))
var second = parseInt(prompt("Enter second "))
var third = parseInt(prompt("Enter third "))
var resOne = first % 10
var ressec = second % 10
var resThird = third % 10

//And operator dono results true honay per work karta hai
if (resOne === ressec && resOne === resThird){
    console.log("The Numbers has same digits ")
}
else{
    console.log("The numbers are not having the last digit")
}