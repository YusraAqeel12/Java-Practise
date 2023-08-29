const car = {
    Number : 9 , 
    color : " Red " ,
    model :  "Axis"
}
console.log(car)
console.log(car.Number)

//Can be Reassigned for objects
car.Number = 7
console.log(car.Number)

//Convert in Json Format
var CarINJson = JSON.stringify(car)
console.log(CarINJson)

//Convert in object
console.log(JSON.parse(CarINJson))