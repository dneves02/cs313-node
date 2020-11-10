const fs = require('fs');
var lines =  undefined;
const file = process.argv[2];
var myNumber = 0;

function addLines (callback) {
   fs.readFile(file, 'utf8', function doneReading(err, fileContents) {
      if (err) {
         console.log(err);
      }


      // lines = fileContents.split('\n').length - 1;

      lines = fileContents.toString().split('\n').length - 1;
      callback ();
      /* 
      myNumber = parseInt(fileContents);
      myNumber++; 
      console.log(myNumber); */
      

   });
}
function logResult () {
   console.log(lines);
}

addLines(logResult);  

