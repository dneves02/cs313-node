const fs = require('fs');


const buf = fs.readFileSync(process.argv[2]);
const readMe = buf.toString().split('\n');
var count = 0;

for (var i = 0; i < readMe.length; i++) {
   count++;
}
count -= 1;

console.log(count);



