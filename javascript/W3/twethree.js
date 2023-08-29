function swapCase(inputString) {
    let swappedString = "";
  
    for (const char of inputString) {
      if (char === char.toUpperCase()) {
        swappedString += char.toLowerCase();
      } else {
        swappedString += char.toUpperCase();
      }
    }
  
    return swappedString;
  }
  const originalString = "Hello World";
  const swappedCaseString = swapCase(originalString);
  console.log(swappedCaseString); // Output: "hELLO wORLD"
   