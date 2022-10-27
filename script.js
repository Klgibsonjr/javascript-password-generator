// Assignment Code
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacter = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
var randomNumber = Math.floor(Math.random() * numbers.length);

var passwordLength = prompt(
  "Please enter the number of characters for your password."
);
var useSpecialCharacters = confirm(
  "Would you like to include special characters in your password?"
);
var useUpperCaseLetters = confirm(
  "Would you like to include upper case letters in your password?"
);

var newPassword = [lowerCaseLetters, numbers];

if (upperCaseLetters) {
  newPassword.push(upperCaseLetters);
}
if (useSpecialCharacters) {
  newPassword.push(specialCharacter);
  12;
}

var userPassword = "";
for (var i = 0; i < passwordLength; i++) {}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
