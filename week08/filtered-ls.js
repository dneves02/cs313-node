const fs = require('fs');
const filePath = process.argv[2];

var lines =  undefined;
var fileList = undefined;

function getFiles (callback) {
   fs.readdir (filePath, function doneReading(err, fileContents) {
      if (err) {
         console.log(err);
      }

      for (var i = 0; i < fileContents.length; i++){
         file = fileContents[i].toString().split('.')
         if (file[1] == 'txt'){
            fileList.append(fileContents[i])
         } 

      }

      callback ();
   })
}

function logResult () {
   console.log(fileList);
}

getFiles(logResult);