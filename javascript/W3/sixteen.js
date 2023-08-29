//
function sum(num){
    if(num>0){
        return num + sum(num-1)
        //3+2+1
    }
    else
    return num

}
var res =sum(3)
console.log(res)