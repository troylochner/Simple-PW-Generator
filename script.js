
/*
--- WORKING STRATEGY---

DEFINE 4 BUCKETS OF characters : lower ; upper ; numeric ; special char
theLower
theUpper
theNumber
theSpecial

PROMPT USER FOR PW LENGTH

PROMPT USER FOR SPECIAL SELECTORS
  VALIDATE USER INPUT -- REQUIRE 1 CHAR PER BUCKET



*/

//DEFINE STARTING BUCKET OF CHARACTERS TO SELECT FROM
var charBucket = {
  theLower:"abcdefghijklmnopqrstuvwxyz",
  theUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  theNumber:"0123456789",
  theSpecial: "!#$%&*-:;<=>?@[^_`{|}~"
}




//GENERATE PASSWORD PROCESS
function generatePassword() {
  alert("The button click works");
  
  //EARLY PROMPTS - REFINE LATER. 
  var myLength = prompt("Please enter a password length \n Note : Length must be between 8-128");
  var numUpper = prompt("How many uppercase characters are required? ( min: 1 )") ;
  var numNumber = prompt("How many numeric characters are required? ( min: 1 )") ;
  var numSpecial = prompt("How many special characters are required? ( min: 1 )") ;


  //CLEAN THE PROMPT IN A BIT
  alert("I'll generate you a password that is " + myLength + " characters long \n The password will contain: \n" + numUpper + " UPPERCASE characters \n " + numNumber + " numeric characters \n " + numSpecial + " special characters" )
  

}


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
