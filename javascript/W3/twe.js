//Function that calls itself is recursion 
//Function ko call karta hai loop ko nahi
const prompt = require("prompt-sync")();

let Number = parseInt(prompt("enter the number "))
function table(){
    for (let i=1 ;  i <= 10 ; i ++){
        let ans= Number * i    
        console.log(ans)

    }
}
table()