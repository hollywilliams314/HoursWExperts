function reverseArray(inArray) {

  let newArray = [];
  for (let cur of inArray) {
    newArray.unshift(cur);
  }
  return newArray;
}

function arrayToList(inArray) {

  let list = null;
  let next = null;
  let revArray = reverseArray(inArray);
  let arraySize = revArray.length;
    for (counter = 0; counter < arraySize; counter++) {
      next = list;
      list = {value: revArray[counter], rest:next};
    }
    return list;
}

function listToArray(list) {

  let newArray = [];
  let i = 0;
  for (let node = list; node; node = node.rest) {
//    console.log("node.value = " + node.value);
    newArray[i++] = node.value;
  }
  return newArray;
}

function prepend(newElement,list) {
//  takes an element and a list and creates a new list that adds the element
// to the front of the input list,
    list = {value : newElement, rest: list}
    return list;
}

function nth(list, element) {
// reg and recursive
// takes a list and a number and returns the element at the given position
// in the list (with zero referring to the first element)
// or undefined when there is no such element.

  let counter = 0;
  let theValue = undefined;
  for (let node = list; node; node = node.rest) {
    if (counter == element) {
      theValue = node.value;
    }
    counter++;
  }
  return theValue;
}

function nthRecursive(list, element) {

  theValue = undefined;
  if (list == null) {
    return undefined;
  }
  else if (list.value == element) {
    return list.value;
  }
  else {
    return nthRecursive(list.rest,element);
  }
}


console.log("first call");
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("second call");
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log("third call");
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log("fourth call");
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log("fifth call");
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20
