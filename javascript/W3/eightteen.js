const prompt = require("prompt-sync")();

let str= prompt("Enter String ")
let letter = prompt("Enter the letter ")
let strlenght = str.length
//loop chalay ga
var counter=0 ;
for (let i=0 ; i<=strlenght ; i++){
    console.log(str[i])
    //if jo loop chalay gaa wo baraber hai letter kai jo input milla hai toh counter mai increment kardo
    if(str[i] == letter){
        counter++
    }
    console.log(`${letter} has ${counter}`)
}

//loop string ki lenght tak chalay ga 