function giveMeAPromise() {
    //fill this in and have it return a promise that resolves to the value 100
//  let promise = new Promise.resolve(100);
  return Promise.resolve(100);
}

  giveMeAPromise().then((value)=> {
    console.log(value);
    // this should print 100
  });
