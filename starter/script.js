// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var useLowerCase=false

const random = {
  symbol: specialCharacters,
  number: numericCharacters,
  lower: lowerCasedCharacters,
  upper: upperCasedCharacters

};

// Function to prompt user for password options
function getPasswordOptions() {
  var specialCharacters = prompt("Have you used special characters in your password?");
  var numericCharacters = prompt("Have you used numeric characters in your password?");
  var lowerCasedCharacters = prompt("Have you used lower cased characters in your password?");
  var upperCasedCharacters = prompt("Have you used upper cased characters in your password?");

// Alert the results
alert(specialCharacters);
alert(numericCharacters);
alert(lowerCasedCharacters);
alert(upperCasedCharacters);

}

// Function for getting a random element from an array
function getRandom(arr) {
  return specialCharacters(Math.floor(Math.random()));
}

function getRandom(arr) {
  return numericCharacters(Math.floor(Math.random()));
}

function getRandom(arr) {
  return lowerCasedCharacters(Math.floor(Math.random()));
}

function getRandom(arr) {
  return upperCasedCharacters(Math.floor(Math.random()));
}


// console.log(numericCharacters)

// Function to generate password with user input
function generatePassword() {
 var password = "";
 getPasswordOptions() 
  return password;
}

//variables scope
///Users/bex/Downloads/CodingBootcamp/UK-VIRT-FE-PT-11-2022-U-LOLC/week-5-advanced-javascript-module/02-functions-lesson/activities/06-Ins-Scope/script.js

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


// * Generate a password when the button is clicked
//   * Present a series of prompts for password criteria
//     * Length of password
//       * At least 10 characters but no more than 64.
//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)
//   * Code should validate for each input and at least one character type should be selected
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page