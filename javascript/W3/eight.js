const prompt = require("prompt-sync")();

var number = parseInt(prompt("Enter The Number "))
function checkNumber(){
    if(number > 0){
        console.log("The Number is Positive")
    }
    else(
        console.log("The Number is Negetive")
    )
        
    }
checkNumber()