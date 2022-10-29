// String variables to build generatePassword
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacter = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
var setToInclude = [];
// var randomNumber = Math.floor(Math.random() * numbers.length);

// Function to generate prompts from user to add to array
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters for your password."
  );
  if (passwordLength < 8 || passwordLength > 128)
    alert("Password must be between 8 and 128 characters in length");
  prompt("Please enter the number of characters for your password.");

  var useSpecialCharacters = confirm(
    "Would you like to include special characters in your password?"
  );
  var useUpperCaseLetters = confirm(
    "Would you like to include upper case letters in your password?"
  );
  var useLowerCaseLetters = confirm(
    "Would you like to include upper case letters in your password?"
  );
  var useNumbers = confirm(
    "Would you like to include numbers in your password?"
  );

  // if (passwordLength

  if (passwordLength) {
    setToInclude.push();
  }
  if (useSpecialCharacters) {
    setToInclude.push(specialCharacter);
  }
  if (useUpperCaseLetters) {
    setToInclude.push(upperCaseLetters);
  }
  if (useLowerCaseLetters) {
    setToInclude.push(lowerCaseLetters);
  }
  if (useNumbers) {
    setToInclude.push(numbers);

  console.log(setToInclude);

  var userPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var userIndex = Math.floor(Math.random() * generatePassword.length);
    if (userIndex == 0) {
      userPassword += upperCaseLetters;
  }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
