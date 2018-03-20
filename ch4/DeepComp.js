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
      // console.log("inside stringify ==  block");
      // console.log(JSON.stringify(val1));
      // console.log(JSON.stringify(val2));
      return true;
    }
    else {
      return false;
    }

  } // end else we have objects

//x == "object" && x != null;

}

let obj = {here: {is: "an"}, object: 2};
console.log("actual test 1: sb true");
console.log(deepEqual(obj, obj));
//console.log("stringify: " + JSON.stringify(obj));
//console.log("typeof stringify: " + typeof(JSON.stringify(obj)));
// → true
console.log("actual test 2: sb false");
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log("actual test 3: sb true");
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
