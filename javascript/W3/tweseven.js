function check(){
    if(times == 0){
        return ''
    }
    return string.repeat(times)
}

const string = "love"
const times = 9
const res = check(string,times)
console.log(res)