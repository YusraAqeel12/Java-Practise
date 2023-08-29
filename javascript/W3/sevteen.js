const prompt = require("prompt-sync")();

var str = prompt("Enter the string ")
var char = str.charAt(0) // pehlay chracter ko laiga
var spl = char.slice(1) //first ko hate ker baaki kai strings daiga
var upper = char.toUpperCase()
console.log(upper+spl)




function check( ){
    return input.charAt(0).toUpperCase()+input.slice(1)

}
const input ="yusra"
const res = check(input)
console.log(res)
//pehlay neechay input ko initialize karo and then function ko call karo