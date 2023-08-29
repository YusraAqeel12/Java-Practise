function alphabetizeString(str) {
    return str.split('').sort().join('');
  }

const inputString = "openai";
const alphabetizedString = alphabetizeString(inputString);
console.log(alphabetizedString); // Output: "aeinop"
