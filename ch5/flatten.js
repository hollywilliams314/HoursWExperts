//Use the reduce method in combination with the concat method to “flatten”
//an array of arrays into a single array that has all the elements of the
// original arrays.

function flatten(inArray) {

  let flatArray = [];
  for (let curArray of inArray) {
    for (let curElement of curArray) {
      flatArray.push(curElement);
    }
  }
  return flatArray;
}

function flatten2(inArray) {

  return inArray.reduce(function(previous, element) {
    previous = previous.concat(element);
    return previous;
  },[]);

}

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays));
console.log(flatten2(arrays));
