function Check(String , Times){
    let result = " "

    //loop times tak chalay and loop kai saath res aur string ko add karo
    for(let i=0 ; i<Times ; i++){
        result = result+String
    }
    return result
}
const OurString = "Hello"
const OurTimes = 5
const Res = Check(OurString, OurTimes)
console.log(Res)