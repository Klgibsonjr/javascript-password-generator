// String variables to build password based off of the user's choices.
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacter = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
let userPassword = "";

// Creates the generate password button.
let generateBtn = document.querySelector("#generate");

// Empty array to store user input choices
let userChoices = [];

// Function to generate prompts from user to add to array
function generatePassword() {
  let passwordLength = prompt("Please enter the number of characters for your password.");
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters in length.");
    passwordLength = prompt("Please enter the number of characters for your password.");
  }

  let useSpecialCharacters = confirm("Would you like to include special characters in your password?");
  let useUpperCaseLetters = confirm("Would you like to include upper case letters in your password?");
  let useLowerCaseLetters = confirm("Would you like to include upper case letters in your password?");
  let useNumbers = confirm("Would you like to include numbers in your password?");

  if (useSpecialCharacters) {
    userChoices.push(specialCharacter);
  }
  if (useUpperCaseLetters) {
    userChoices.push(upperCaseLetters);
  }
  if (useLowerCaseLetters) {
    userChoices.push(lowerCaseLetters);
  }
  if (useNumbers) {
    userChoices.push(numbers);
  }

  if (userChoices.length === 0) {
    alert("No selections were made to generate a new password. Please try again");
    generatePassword();
  }

  for (let i = 0; i <= passwordLength; i++) {
    let userSelectionIndex = Math.floor(Math.random() * userChoices.length);
    let userSelection = userChoices[userSelectionIndex];
    userPassword += userSelection[Math.floor(Math.random() * userSelection.length)];
  }
}

// Generate event listener to listen for user click of the generate password button to initiate the generatePassword function.
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = userPassword;
  alert("Your password has been generated: " + passwordText.value);
}
