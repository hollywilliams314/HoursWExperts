function countBs(inString) {

  return countChar(inString,"B");
}

function countChar(inString,theChar) {

  let bigChar = theChar.toUpperCase();
  let littleChar = theChar.toLowerCase();
  let numChars = 0;
  let inStringLength = inString.length;

  for (let counter = 0;counter<inStringLength;counter++) {
    if (inString[counter] == littleChar || inString[counter] == bigChar) {
      numChars++;
    }
  }
  return numChars;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
