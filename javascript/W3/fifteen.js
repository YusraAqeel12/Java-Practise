//fibonacci series start with zero and one and agla number pechlay number ka sum hai
// 0 1 1 2 3 5

var first = 0
var second = 1
console.log(first)
console.log(second)
for (var i=0;i++ ; i <= 10){
    var temp=first+second
    console.log(temp)
    first=second
    second=temp
    

}