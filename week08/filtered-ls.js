const fs = require('fs');
const filePath = process.argv[2];
const fileType = process.argv[3];

var file =  undefined;
var fileList = [];

function getFiles () {
   fs.readdir (filePath, function doneReading(err, fileContents) {
      if (err) {
         console.log(err);
      }

      for (var i = 0; i < fileContents.length; i++){
         file = fileContents[i].toString().split('.')
         if (file[1] == fileType){
            //fileList.push(fileContents[i])
            console.log(file[0]+"."+file[1]);
         } 

      }

      
   })
}

/* function logResult () {
   console.log(fileList);
} */

getFiles();