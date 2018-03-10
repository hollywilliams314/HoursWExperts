let size = 8;
let lineA="";
let lineB="";
let line="";

for (let count=0;count<size/2;count++) {
 lineA += " #";
 lineB += "# "
}

line = lineA +"\n" + lineB;

for (let counter=0;counter<size/2;counter++) {
	console.log(line);
}
