//define where things are going within the page. 
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var generateBtnAuto = document.querySelector("#generate-auto");

//DEFINE STARTING BUCKET OF CHARACTERS TO SELECT FROM
var lowerBucket = "abcdefghijklmnopqrstuvwxyz";
var upperBucket = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberBucket = "0123456789";
//PROVIDING A MORE LIMITED SET OF SPECIAL CHARS - I did pull some characters out here. - removed double + single quotes + forward slash as it was trying to create an escape character. 
var specialBucket = "!#$%&()*+,-./:;<=>?@[]^_{|}~";


//validator : 3 conditions | must not be empty | must be greater than our min ; less than our max - NOT USED RIGHT NOW ; but keep for improvements down the road. 
/*function validator(input, minTrue, maxTrue) {
  if (input === null) {
    return false;
  } else if (Number.isInteger(input) !== true) {
    return false;
  } else if (input < minTrue) {
    return false;
  } else if (input > maxTrue) {
    return false;
  } else {
    return true;
  }
}*/

///USER PROMPTS FOR THE PASSWORD PROCESS
function generatePassword() {

 //CODE BEFORE REFACTORING
  //var remainingCharacters ; 
  var myLength ;
  while (myLength < 8 || myLength > 128 || myLength !== parseInt(myLength)) {
    myLength = parseInt(prompt("Please enter a password length \n Note : Length must be between 8-128 characters.", 16));
    };

  //remainingCharacters=(myLength-4); //RESERVE 4 CHARACTERS
  var numLower ;
  while (numLower < 1 || numLower !== parseInt(numLower) ) {
    numLower = parseInt(prompt("How many lowercase characters would you like? ( min: 1 ),", 1));
  };
  var numUpper ; 
  while (numUpper < 1 || numUpper !== parseInt(numUpper)) {
    numUpper = parseInt(prompt("How many uppercase characters would you like? ( min: 1 ),", 1));
  };
  var numNumber ;
  while (numNumber < 1 || numNumber !== parseInt(numNumber)) {
    numNumber = parseInt(prompt("How many numeric characters would you like? ( min: 1 )", 1));
  };
  var numSpecial;
  while (numSpecial < 1 || numSpecial !== parseInt(numSpecial)) {
    numSpecial = parseInt(prompt("How many special characters would you like? ( min: 1 ) \n Accepted characters : !#$%&*-:;<=>?@[^_{|}~", 1));
  };

  var remainToFill = myLength - (numLower + numUpper + numNumber + numSpecial) ;
  if (remainToFill > 0){
    numlower = remainToFill + numLower;
  };
  
  //var numLower = myLength - (numUpper + numNumber + numSpecial); removing this - being more direct.
  var password = pwGen(myLength, numLower, numUpper, numNumber, numSpecial);

  return password;

}

//GENERATE PASSWORD BASED ON USER INPUT
function pwGen(myLength, numLower, numUpper, numNumber, numSpecial) {
  var myBucket;
  // gather characters from each category 
  myBucket = charGrabber(numUpper, upperBucket) +  charGrabber(numNumber, numberBucket) + charGrabber(numSpecial, specialBucket) + charGrabber(numLower, lowerBucket)
  //SHUFFLE OUR RESULTS & RETURN THEM
  shuffle(myBucket);
  return myBucket;

}

//Shuffle function to re-arrange my results.
// UTILIZED TUTORIAL FROM  https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/ to construct the shuffle function . 
function shuffle(x) {
  //USE A SPLIT FUNCTION TO CONVERT TO AN ARRAY
  var arr = x.split('');

  arr.sort(function () {
    return 0.5 - Math.random();
  });
  x = arr.join('');
  return x;
}

//GATHER CHARACTERS FROM THE CHARACTER BUCKETS TO FORM THE PASSWORD
function charGrabber(howMany, charBucket) {
  var picks = '';
  for (var i = 0; i < howMany; i++) {
    picks = picks + (charBucket[Math.floor(Math.random() * charBucket.length)]);
    //console.log(picks);
  }
  return picks;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var passwordText = document.querySelector("#password"); redundant
  passwordText.value = password;

}

// Automatic Password Generator - passes in a few simple paramters to make a secure PW
function writePasswordAuto() {
  //IF CALLED - WE WILL SKIP THE PROMPT STEPS AND MAKE A 16 CHAR PW
  var password = pwGen(16, 6, 4, 3, 3);
  passwordText.value = password;
}

//Allow for user to add PW to clipboard.
function copyPW() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Password copied to clipboard.")
}

// Event listeners
generateBtn.addEventListener("click", writePassword);
generateBtnAuto.addEventListener("click", writePasswordAuto);