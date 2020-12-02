function getRate(){
  // Get the values from the form

  var type = $('#type').val();
  var weight = $('#weight').val();
  console.log('Calculating rate for parcel type: '+ type);
  console.log('Weight: '+ weight);
  
  calculateCost(type, weight);

}

function calculateCost(type, weight) {
  var cost = 0;

  if (type === "stamped") {
      switch (true){
        case (weight <= 1): 
          cost = 0.55;
        case (weight <= 2):
          cost = 0.7;
        case (weight <= 3):
          cost = 0.85;
        case (weight <= 3.5):
          cost = 1.0;
      }
      console.log('Cost: '+ cost);  
  } else if (type === "metered") {
      switch (true){
        case (weight <= 1): 
          cost = 0.5;
        case (weight<= 2):
          cost = 0.65;
        case (weight <= 3):
          cost = 0.8;
        case (weight <= 3.5):
          cost = 0.95;
      } 
      console.log('Cost: '+ cost);  
  } else if (type === "flats") {
      switch (true){
        case (weight <= 1): 
          cost = 1.0;
        case (weight <= 2):
          cost = 1.2;
        case (weight <= 3):
          cost = 1.4;
        case (weight <= 4):
          cost = 1.6;
        case (weight <= 5):
          cost = 1.8;
        case (weight <= 6):
          cost = 2.0;
        case (weight <= 7):
          cost = 2.2;
        case (weight <= 8):
          cost = 2.4;
        case (weight <= 9):
          cost = 2.6;
        case (weight <= 10):
          cost = 2.8;
        case (weight <= 11):
          cost = 3.0;
        case (weight <= 12):
          cost = 3.2;
        case (weight <= 13):
          cost = 3.4;
      }
      console.log('Cost: '+ cost);

  } else if (type === "first-class") {
      switch (true){
        case (weight <= 4):
          cost = 3.8;
        case (weight <= 8):
          cost = 4.6;
        case (weight <= 12):
          cost = 5.3;
        case (weight <= 13):
          cost = 5.9;
      }
      console.log('Cost: '+ cost);
  }
  console.log('Your total cost is: '+ cost);
  $('#cost').empty();
  $('#cost').append('<h3>$' + cost + '</h3>');
    
}

