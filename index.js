const readLineSync = require('readline-sync');
console.log("Welcome to Url Encoder and Decoder Utility App\n");


function encodeURL(urlToEncode){
  const encodedComponent = encodeURIComponent(urlToEncode);
  return encodedComponent;
}

function decodeURL(urlToDecode){
  const decodedComponent = decodeURIComponent(urlToDecode); 
  return decodedComponent;
}

function urlUlitityApp(){

  let selectedOption = parseInt(readLineSync.question("Option 0 to leave the URL Utility Application\nOption 1 for encoding the URL.\nOption 2 for decoding the URL.\nPlease provide your input\n"));

  console.log(`Hi, you have selected option: ${selectedOption}\n`);

  
  if(selectedOption==0){
     return selectedOption;
   }

  while(selectedOption!=0){

    switch(selectedOption){

  case 1:
  const urlToEncode = readLineSync.question("Enter your URL to Encode\n");
  const encodedUrl = encodeURL(urlToEncode);
  console.log(`Your encoded URL is : ${encodedUrl}\n`);
  break;
  case 2:
  const urlToDecode = readLineSync.question("Enter your URL to Decode\n");
  const decodedUrl = decodeURL(urlToDecode);
  console.log(`Your encoded URL is : ${decodedUrl}\n`);
  break;
  default:
  console.log("Invalid URL");
  break;
  }
  
  selectedOption = parseInt(readLineSync.question("Please provide your input\n"));
  console.log(`Hi, you have selected option: ${selectedOption}\n`);
   

  }

}

const val = urlUlitityApp();
console.log("Thank you for using the URL Utility App\n");

