//Implement every as a function that takes an array and a predicate function as
// parameters. Write two versions, one using a loop and one using the some method.

function every(array, test) {
  // return true if every element of array passes test
  
}

function everySome(array, test) {

}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true
