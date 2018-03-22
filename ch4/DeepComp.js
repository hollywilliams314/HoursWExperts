function deepEqual(val1,val2) {

  if (val1 == null && val2 == null) {
//    console.log("case 1 both null");
    return true;
  }
  else if (val1 == null || val2 == null) {
//    console.log("case 2 one null");
    return false;
  }
  else if (val1 === val2) {
//    console.log("case 3 ===");
    return true;
  }
  else {  // objects must have same properties and values
    if(JSON.stringify(val1) == JSON.stringify(val2)) {
      return true;
    }
    else {
      return false;
    }

  } // end else we have objects

}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
