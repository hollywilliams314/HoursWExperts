function reverseArray(inArray) {

  let newArray = [];
  for (let cur of inArray) {
    newArray.unshift(cur);
  }
  return newArray;
}

function reverseArrayInPlace(arrayValue) {

    let arraySize = arrayValue.length;
    // let revArray = reverseArray(arrayValue);
    //
    // for (let counter = 0; counter < arraySize; counter++) {
    //   arrayValue[counter] = revArray[counter];
    // }
    let j = 1;
    halfArraySize = Math.trunc(arraySize/2);
    for (i = 0; i < arraySize - 1; i++) {
      let temp = arrayValue[i];
      arrayValue[i] = arrayValue[arraySize - j];
      arrayValue[arraySize - j] = temp;
      j++;
    }

}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
