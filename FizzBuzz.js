let out = "";
for(let counter = 1;counter <= 100;counter++){
  if (counter%3 === 0) {
    out = "Fizz";
  }
  if (counter%5 === 0) {
    out += "Buzz";
  }
  if (out == "") {
    out =counter;
 }
 console.log(out);
 out = "";
}
