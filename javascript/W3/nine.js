const prompt = require("prompt-sync")();

const number = prompt("Enter a number: ");
//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

// functions
function Check (){
    if (number % 2 == 0 ){
        return console.log(number, "Even")

    }
    else{
        console.log("odd")
    }

}
Check()