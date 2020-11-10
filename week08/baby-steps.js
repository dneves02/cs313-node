

function addNumbers(){
   var total = 0;
   var number = 0;

   for (var i = 2; i < process.argv.length; i++) {
      
       number = parseInt(process.argv[i]);
       total += number;
   }   
   return console.log(total);
}

addNumbers();