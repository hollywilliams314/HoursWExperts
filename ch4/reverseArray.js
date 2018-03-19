function reverseArray(inArray) {

  let newArray = [];
  for (let cur of inArray) {
    newArray.unshift(cur);
  }
  return newArray;
}

function reverseArrayInPlace(arrayValue) {

    let arraySize = arrayValue.length;
    let revArray = reverseArray(arrayValue);

    for (let counter = 0; counter < arraySize; counter++) {
      arrayValue[counter] = revArray[counter];
    }

  //  arrayValue = revArray;    nope
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
