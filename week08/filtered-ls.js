const fs = require('fs')
const path = require('path')

const filePath = process.argv[2]
//const fileType = process.argv[3];
const fileType = "." + process.argv[3]

//var file =  undefined
//var fileList = []

fs.readdir (filePath, function (err, files) {
   if (err) {
      console.log(err)
   }
   files.forEach(function(file) {
      if (path.extname(file) === fileType) {
         console.log(file)
      }
   })
})

/* function getFiles () {
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
 */
/* function logResult () {
   console.log(fileList);
} */

//getFiles();