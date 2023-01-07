// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Prompt user for the password criteria
function getPasswordOptions() {
  var lengthOfPassword = parseInt(
    prompt("How many characters would you like your password to contain?")
  );
  if (isNaN(lengthOfPassword) === true) {
    alert("Must enter a valid number!");
    getPasswordOptions();
  }
  if (lengthOfPassword < 10) {
    alert("Must be more than 10 characters!");
    getPasswordOptions();
  }
  if (lengthOfPassword > 64) {
    alert("Must be less than 64 characters!");
    getPasswordOptions();
  }
  var specialCharacters = confirm(
    "Click OK if you have you used special characters in your password."
  )
  var numericCharacters = confirm(
    "Click OK if you have you used numeric characters in your password."
  )
  var lowerCasedCharacters = confirm(
    "Click OK if you have you used lower cased characters in your password."
  );
  var upperCasedCharacters = confirm(
    "Click OK if you have you used upper cased characters in your password."
  );

  if (specialCharacters === false &&
      numericCharacters === false &&
      lowerCasedCharacters === false &&
      upperCasedCharacters === false 
      ){
        alert ("at least 1 character type should be selected please retry!")
        getPasswordOptions();
      }

  // keys
  var options = {
    length: lengthOfPassword,
    special: specialCharacters,
    numeric: numericCharacters,
    lower: lowerCasedCharacters,
    upper: upperCasedCharacters,
  };
  return options;
}

// Function for getting a random element from an array
function getRandomChar(arr,randomNumber) {
  var randomChar = arr [randomNumber];
  console.log(randomNumber, randomChar);
  return randomChar;
}

// Password length between 10 < 64
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var passwordLength = 64;
  var password = "";
  var possibleCharacters = [];
  if (passwordOptions.special === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  if (passwordOptions.numeric === true) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (passwordOptions.lowerCasedCharacters === true) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  if (passwordOptions.upperCasedCharacters === true) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }
  for (var i = 0; i < passwordOptions.length; i++) {
    var randomNumber = Math.floor(Math.random() * possibleCharacters.length);
    console.log(randomNumber);
    password += getRandomChar(possibleCharacters,randomNumber);
  } 
  console.log("password = ", password)
  return password;
}

// CODE BELOW DOES NOT NEED EDITING
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

