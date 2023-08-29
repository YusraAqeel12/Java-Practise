function check(myStr, myWord,myNumber){
    // ==0 aayi ga instead of =
    if(myNumber==0 ||myNumber > myStr.length){
        console.log("Not Possibe")
        return myStr

    }
    
    //0 sai lai kar number tak string aayi ga
    let firstInput=myStr.slice(0,myNumber)
    
    // last kai jitnay bhee strings hain wo aayi ga
    let secondInput=myStr.slice(myNumber)
    return firstInput + myWord +secondInput

}

const str="My name is aqeel"
const word = "yusra"
const number = 0
const res = check(str, word,number)
console.log(res)