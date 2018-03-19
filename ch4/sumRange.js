// range takes a start & end # and returns an array
// Note: you could do this all in one loop IF you revrese start & end, take the
//    absolute value of the step and reverse the array when you are done.
//    I feel that with al of that, that maybe this is a cleaner approach.

function range(start,end,step=1) {

   let numArray = [];
   if (end>=start) {
     for (let counter = start; counter <= end; counter+=step) {
       numArray.push(counter);
     }
   }
   else {
     for (let counter = start; counter >= end; counter+=step) {
       numArray.push(counter);
     }
   }
  return numArray;
}

// sum takes an array and returns the sum of all the numbers in it

function sum(inArray) {

  let inArraySize = inArray.length;
  let theSum = 0;

  for (let num of inArray) {
    theSum += num;
  }
  return theSum;
}

console.log(range(1, 10));
console.log(range(1,10,2));
console.log(range(2,25,3));
console.log(range(5, 2, -1));
console.log(sum(range(1,10)));
console.log(sum(range(5, 2, -1)));
