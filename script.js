// Assignment code here
//arrays//
var numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var symbols =['!', '@', '#', '$', '%', '^', '&', "*", '(', ')', '+', '/', '-'];

var lowercase =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var generateBtn = document.querySelector("#generate");
// Prompts


//main function// 

function generatePassword  () {
  var temporaryArray = [];
  var finalPasswordArray = [];
  var finalPassword = ""
  var lengthInput = prompt("Enter Password Length")
  var length = parseInt (lengthInput)
  if (length < 8 || length > 128 ) {
    alert ("Number needs to be between 8 and 128")
    return
  } 
  var numbersInput = confirm("Does your password require numbers?")
  var symbolsInput =confirm("Does your password require special characters?")
  var lowercaseInput = confirm("Does your password require lowercase letters?")
  var uppercaseInput = confirm("Does your password require uppercase letters?")
  // for loop
//randomly select and input info 

  
//numbers

 if (numbersInput === true)
{
  var randomIndex= Math.floor(Math.random() * 10)
  console.log(numbers)
  console.log(randomIndex)
  finalPasswordArray .push(numbers[randomIndex])
  console.log(finalPasswordArray)
}
 if (symbolsInput === true) {
  var randomIndex= Math.floor(Math.random() * 10)
    numbers.concat(symbolsInput)
    console.log(symbols)
    finalPasswordArray .push(symbols[randomIndex])
    console.log(FinalPasswordArray)
 }

 if (lowercaseInput === true) {
  var randomIndex= Math.floor(Math.random() * 10)
   lowercase.concat(numbersInput, symbolsInput)
   console.log(lowercase)
   finalPasswordArray .push(lowercase[randomIndex])
    console.log(FinalPasswordArray)

 }
 if (uppercaseInput === true) {
  var randomIndex= Math.floor(Math.random() * 10)
  uppercase.concat(numbersInput, symbolsInput, lowercaseInput)
  console.log(uppercase)
  finalPasswordArray .push(uppercase[randomIndex])
   console.log(FinalPasswordArray)

}

 for (var i = 0; i < length; i++) {
  if (length > lengthInput);
}



 //if the user wants numbers we are going to put random numbers into the final password/
//if statement they numbers or not
//need a  place to put the random numbers m
//random selected number math.random
//push that random number into the array
////  .push
 return finalPassword 
}

// Get references to the #generate element



// Write password to the #password input
function writePassword() {
  console.log ("string hello")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",() => writePassword()); 

