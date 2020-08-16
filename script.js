
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

  STRING RANDOMIZE REFERENCE : 
  https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/


*/

/*---------------------------------------------------------------/*/
//DEFINE STARTING BUCKET OF CHARACTERS TO SELECT FROM
var lowerBucket = "abcdefghijklmnopqrstuvwxyz";
var upperBucket =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberBucket = "0123456789";
var specialBucket =  "!#$%&*-:;<=>?@[^_`{|}~";



/*---------------------------------------------------------------/*/
//USER PROMPTS FOR THE PASSWORD PROCEES
function generatePassword() {
  //alert("The button click works");
  //INITIAL USER PROMPTS - REFINE LATER. 
  var myLength = parseInt(prompt("Please enter a password length \n Note : Length must be between 8-128"));
  var numUpper = parseInt(prompt("How many uppercase characters are required? ( min: 1 )")) ;
  var numNumber = parseInt(prompt("How many numeric characters are required? ( min: 1 )")) ;
  var numSpecial = parseInt(prompt("How many special characters are required? ( min: 1 )")) ;
  var numLower = myLength - (numUpper + numNumber + numSpecial);

  console.log("Length: " + myLength);
  console.log("Lowers : " + numLower);
  console.log("Uppers: " + numUpper);
  console.log("Numbers : " + numNumber);
  console.log("Specials : " + numSpecial);

  pwGen(myLength,numLower,numUpper,numNumber,numSpecial);

  return "butt";

}

/*---------------------------------------------------------------/*/
//GENERATE PASSWORD BASED ON USER INPUT
function pwGen(myLength,numLower,numUpper,numNumber,numSpecial){

  //REAPEAT BACK TO THE USER WHAT YOU ARE GOING TO DO
  alert("I'll generate you a password that is " + myLength + " characters long \n The password will contain: \n" + numUpper + " UPPERCASE characters \n " + numNumber + " numeric characters \n " + numSpecial + " special characters" ) ; 

  //NEED TO PASS BACK RESULTS EACH TIME - CONCAT - THEN RANDOMIZE 
  charGrabber(numUpper,upperBucket);
  charGrabber(numNumber,numberBucket);
  charGrabber(numSpecial,specialBucket);
  charGrabber(numLower,lowerBucket);
}

/*---------------------------------------------------------------/*/
//GATHER CHARACTERS FROM THE CHARACTER BUCKETS TO FORM THE PASSWORD
function charGrabber(howMany,charBucket){
  alert('Picking ' + howMany + " at random from the follwoing " + charBucket);

  for (var i = 0; i < howMany; i++) {
    var randomPick = charBucket[Math.floor(Math.random()*charBucket.length)]
    console.log(randomPick);

  };
  
  //GRAB A RANDOM NUMBER FROM THE BUCKET
  //myKey = theUpper[Math.floor(Math.random() * theUpper.length)]

  // FOR THE AMOUNT OF VALUES NEEDED ; GO TO THE BUCKET AND PICK VALUES AT RANDOM

}

/*---------------------------------------------------------------/*/
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
