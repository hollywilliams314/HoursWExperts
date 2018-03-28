//Implement every as a function that takes an array and a predicate function as
// parameters. Write two versions, one using a loop and one using the some method.

function every(array, test) {
  // return true if every element of array passes test
  itIsTrue = undefined;
  if (array.length <= 0) {
    return true;
  }

  for (let element of array) {
    if (itIsTrue == undefined) {
      itIsTrue = test(element);
    }
    else {
      itIsTrue = itIsTrue && test(element);
    }
  }
  return itIsTrue;
}

function everySome(array, test) {
  //a && b equals !(!a || !b).
  let x = array.some(function(cur) {
      return !test(cur);
  });
  return !x;
}

console.log("Using loop");
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log("--- And using some ---");
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true
