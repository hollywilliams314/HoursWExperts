async function locateScalpel(nest) {
  
  let scalpelLoc = nest;
 // console.log(nest);
  
  // loop through scalpel locations to the end (back to orig nest)
  
  // this code gives all nests
  //map goes through all neighbor nests
    let lines = network(nest).map(async name => {   
    return name + ": " +
      await anyStorage(nest, name, `scalpel`);
  });
   return (await Promise.all(lines)).join("\n");
  
  // this code only gives first nest
    let list = "";
    await Promise.all(network(nest).map(async name => {
      list += `${name}: ${
        await anyStorage(nest, name, `scalpel`)
      }\n`;
    }));
  return list;

  
}

function locateScalpel2(nest) {
  // Your code here.
}

locateScalpel(bigOak).then(console.log); 
// → Butcher Shop