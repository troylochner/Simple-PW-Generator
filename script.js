
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
//PROVIDING A MORE LIMITED SET OF SPECIAL CHARS
var specialBucket =  "!#$%&*-:;<=>?@[^_{|}~";

/*---------------------------------------------------------------/*/
//USER PROMPTS FOR THE PASSWORD PROCEES
function generatePassword() {
  //alert("The button click works");
  
  //INITIAL USER PROMPTS - REFINE LATER. 
  var myLength = '';
  while (myLength < 8 || myLength > 128  || myLength !== parseInt(myLength)  ) {
    myLength = parseInt(prompt("Please enter a password length \n Note : Length must be between 8-128",16));
  };

  var numUpper = '';
  while (numUpper < 1 || numUpper !== parseInt(numUpper) ) {
    numUpper = parseInt(prompt("How many uppercase characters are required? ( min: 1 ),",1));
  };

  var numNumber = '';
  while (numNumber < 1 || numNumber !== parseInt(numNumber) ) {
    numNumber = parseInt(prompt("How many numeric characters are required? ( min: 1 )",1));
  };

  var numSpecial = '';
  while (numSpecial < 1 || numSpecial !== parseInt(numSpecial)) {
    numSpecial = parseInt(prompt("How many special characters are required? ( min: 1 )",1));
  }


  // Fill in the remainder with lowercase characters. 
  var numLower = myLength - (numUpper + numNumber + numSpecial);

  console.log("Length: " + myLength);
  console.log("Lowers : " + numLower);
  console.log("Uppers: " + numUpper);
  console.log("Numbers : " + numNumber);
  console.log("Specials : " + numSpecial);

  var myChars = pwBuilder(myLength,numLower,numUpper,numNumber,numSpecial);

  var myPassword = shuffle(myChars);

  // passwordText.value = password;
  return myPassword;

}

/*---------------------------------------------------------------/*/
//GENERATE PASSWORD BASED ON USER INPUT
function pwBuilder(myLength,numLower,numUpper,numNumber,numSpecial){

  //REAPEAT BACK TO THE USER WHAT YOU ARE GOING TO DO
  /*alert("I'll generate you a password that is " + myLength + " characters long \n The password will contain: \n" + numUpper + " UPPERCASE characters \n " + numNumber + " numeric characters \n " + numSpecial + " special characters" ) ; */

  var myBucket ; 
  //NEED TO PASS BACK RESULTS EACH TIME - CONCAT - THEN RANDOMIZE 
  myBucket = charGrabber(numUpper,upperBucket);
  myBucket = myBucket + charGrabber(numNumber,numberBucket);
  myBucket = myBucket + charGrabber(numSpecial,specialBucket);
  myBucket = myBucket + charGrabber(numLower,lowerBucket);

  return myBucket;

}

/*---------------------------------------------------------------/*/
//Shuffle function to re-arrange my results.
// UTILIZED TUTORIAL FROM  https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/ to construct the shuffle function . 
function shuffle(x) {
  //USE A SPLIT FUNCTION TO CONVERT TO AN ARRAY
  var arr = x.split('');
  
  arr.sort(function() {
    return 0.5 - Math.random();
  });  
  x = arr.join('');                
  return x;                       
}
/*---------------------------------------------------------------/*/
//GATHER CHARACTERS FROM THE CHARACTER BUCKETS TO FORM THE PASSWORD
function charGrabber(howMany,charBucket){
  /*alert('Picking ' + howMany + " at random from the follwoing " + charBucket);*/

  var picks = '' ; 

  for (var i = 0; i < howMany; i++) {
    picks = picks + ( charBucket[Math.floor(Math.random()*charBucket.length)] ) ;
    console.log(picks);
}
return picks ; 
}




/*---------------------------------------------------------------/*/
// Assignment Code
var generateBtn = document.querySelector("#generate");

var generateBtnAuto = document.querySelector("#generate-auto");
//ADDING AN OPTION TO RUN IN AN AUTOMATIC ONE-CLICK MODE


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function writePasswordAuto() {
  //IF CALLED - WE WILL SKIP THE PROMPT STEPS AND MAKE A 16 CHAR PW
   var myChars = pwBuilder(16,6,4,3,3);
   var password = shuffle(myChars);
   var passwordText = document.querySelector("#password");
   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtnAuto.addEventListener("click", writePasswordAuto);