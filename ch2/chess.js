let size = 9;
let lineA="";
let lineB="";
let line="";
let out = "";
let halfSize = Math.trunc(size/2);

for (let count=0;count<halfSize;count++) {
 lineA += " #";
 lineB += "# "
}

if (size % 2 == 1) {
  lineB += "#";
}

line = lineA +"\n" + lineB;

for (let counter=0;counter<halfSize;counter++) {
	out = out + line + "\n";
}

if (size % 2 == 1) {
  out = out + lineA;
}

console.log(out);
