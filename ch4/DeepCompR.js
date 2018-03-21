function deepEqual(val1,val2) {

  let theyAreEqual = false;

  if (val1 == null && val2 == null) {
    console.log("case 1 both null");
    return true;
  }
  else if (val1 == null || val2 == null) {
    console.log("case 2 one null");
    return false;
  }
  else if (val1 === val2) {
    console.log("case 3 ===");
    return true;
  }
  else {  // objects must have same properties and values
    console.log("case 4 both objects");
    if (Object.keys(val1).length == Object.keys(val2).length) {

      // make sure all the values are ==
      console.log("inside length == length block");

      keysOfVal1 = Object.keys(val1) ;
      keysOfVal2 = Object.keys(val2) ;
      keyLeng = keysOfVal1.length;
      console.log("Object.keys(val1): " + Object.keys(val1));
      console.log("Object.keys(val2): " + Object.keys(val2));
  //    if (Object.keys(val1) == Object.keys(val2)) {
      if (typeof(val1) == typeof(val2)) {
        console.log("inside typeof == typeof block");
        for (let i = 0; i < keyLeng; i++) {
          console.log("keysOfVal1["+i+"] "+ keysOfVal1[i]  );
          console.log("keysOfVal2["+i+"] "+ keysOfVal2[i]  );
          if (keysOfVal1[i] == keysOfVal2[i]) {
      //       same = same && true;   //?
            let newVal1 = Object.keys(val1)[i]; //the obj with the key of keysOfVal1[i]
            let newVal2 = Object.keys(val2)[i]; //the obj with the key of keysOfVal1[i]
            console.log("Object.keys(val1)[" +i + "]" + Object.keys(val1)[i]);
            console.log("typeof Object.keys(val1)[i] - " + typeof(Object.keys(val1)[i]));
            console.log("recursing");
            return deepEqual(newVal1, newVal2); // call with name of next level obj ??
          }
        } // end for
      return true;

    }
    else {
      return false;
    }
  }
  } // end else we have objects

//x == "object" && x != null;

//  return theyAreEqual;

}

console.log(Object.keys({x: 0, y: 0, z: 2}));
console.log(Object.keys({here: {is: "an"}, object: 2}))
// returns [ 'here', 'object' ]
// let test = [1,2,3,4];
// let test2 = [1,2,3,4];
// console.log("array test");
// console.log(deepEqual(test,test));
// console.log("array test2");
// console.log(deepEqual(test,test2));

// actual tests
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
