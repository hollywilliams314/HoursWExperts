function deepEqual(val1,val2) {

  //  let theyAreEqual = false;

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
    //  console.log("case 4 both objects");
    if (Object.keys(val1).length == Object.keys(val2).length) {

      keysOfVal1 = Object.keys(val1) ;
      keysOfVal2 = Object.keys(val2) ;
      keyLeng = keysOfVal1.length;
      if (typeof(val1) == typeof(val2)) {
        for (let i = 0; i < keyLeng; i++) {
  //    for (let i of keysOfVal1 )
          if (keysOfVal1[i] == keysOfVal2[i]) {
            let val1Key = Object.keys(val1)[i]; //the obj with the key of keysOfVal1[i]
            let val2Key = Object.keys(val2)[i]; //the obj with the key of keysOfVal1[i]
            return deepEqual(val1[val1Key], val2[val2Key]); // call with name of next level obj ??
          }
        } // end for
        return true;
      }
      else {
        return false;
      }
    } // if length == length
    else {
      return false;
    }
  } // end else we have objects

}

// actual tests
let obj = {here: {is: "an"}, object: 2};
console.log("actual test 1: sb true");
console.log(deepEqual(obj, obj));
// → true
console.log("actual test 2: sb false");
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log("actual test 3: sb true");
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
