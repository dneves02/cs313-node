const fs = require('fs');

/* Solution 1:

const buf = fs.readFileSync(process.argv[2]);
const readMe = buf.toString().split('\n');
var count = 0;

for (var i = 0; i < readMe.length; i++) {
   count++;
}
count -= 1;

console.log(count); */

/* Solution 2:
const fs = require('fs')

    const contents = fs.readFileSync(process.argv[2])
    const lines = contents.toString().split('\n').length - 1
    console.log(lines) */


const lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
    
console.log(lines);

    