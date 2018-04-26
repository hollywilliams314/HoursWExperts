function getPromiseOne() {
    return Promise.resolve(30);
}
function getPromiseTwo() {
    return Promise.resolve(50);
}

//add the two values from the promises and print the sum, 80
Promise.all([getPromiseOne(), getPromiseTwo()]).then(function(values){
  console.log(values[0] + values[1]);
})
