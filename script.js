// String variables to build password based off of the user's choices.
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacter = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
let userPassword = "";

// Creates the generate password button.
let generateBtn = document.querySelector("#generate");

// Generate event listener to listen for user click of the genreate password button to initiate the generatePassword function.
// generateBtn.addEventListener("click", writePassword);

// Empty array to store user input choices
let userChoices = [];

// Function to generate prompts from user to add to array
function generatePassword() {
  let passwordLength = prompt("Please enter the number of characters for your password.");
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters in length.");
    passwordLength = prompt("Please enter the number of characters for your password.");
  }

  // Variable used to store user's password length choice. Testing purposes only.
  let userPasswordLength = passwordLength.valueOf();

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

  // Used to test if a password length is being set.
  console.log(userPasswordLength);

  if (userChoices.length === 0) {
    alert("No selections were made to generate a new password. Please try again");
    generatePassword();
  }

  for (let i = 0; i <= passwordLength; i++) {
    let userSelectionIndex = Math.floor(Math.random() * userChoices.length);
    let userSelection = userChoices[userSelectionIndex];
    userPassword += userSelection[Math.floor(Math.random() * userSelection.length)];
  }

  // Used to log if a new password is being generated.
  console.log(userPassword);
}

// Generate event listener to listen for user click of the genreate password button to initiate the generatePassword function.
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = userPassword;
}
