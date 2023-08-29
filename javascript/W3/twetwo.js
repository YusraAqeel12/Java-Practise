function capitalizedWords(inputString) {
    const words = inputString.split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(" ");
  }
  
  const originalSentence = "hello world";
  const capitalizedSentence = capitalizedWords(originalSentence);
  console.log(capitalizedSentence); // Output: "Hello World"
  
  //word aayi ga i gues word aik paremeter hai that represents each word in an array