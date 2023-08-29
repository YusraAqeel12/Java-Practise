const prompt = require("prompt-sync")();

celcius = parseFloat(prompt("Enter Celsius "))
farenheit = celcius *(9/5) + 32
console.log(farenheit)