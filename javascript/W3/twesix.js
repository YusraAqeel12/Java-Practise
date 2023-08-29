function chopStringIntoChunks(myInput, myChunksize) {
    if (myChunksize === 0) {
        console.log("Not Possible");
        return myInput;
    }
    const emptyarray=[]
//i zero kai barabar hai , inputlength tak jaaiga aur her iteration mai jump karay ga by the size of chunk
    for(i=0 ; i <=myInput.length ; i += myChunksize){
        emptyarray.push(myInput.slice(i,i+myChunksize))
        //0 , 10
    }
    return emptyarray
}

// Example usage
const input = "This is an example string to be chopped into chunks.";
const chunkSize = 10;
const result = chopStringIntoChunks(input, chunkSize);
console.log(result);
