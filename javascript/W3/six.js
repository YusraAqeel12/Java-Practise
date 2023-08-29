const prompt = require("prompt-sync")();

kilometres = parseFloat(prompt('Enter the number in kilometres '))
miles = kilometres*0.621371
console.log(miles)