// String variables to build password based off of the user's choices.
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacter = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
let userPassword = "";
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

  // Variable used to store user's password length choice.
  let userPasswordLength = passwordLength.valueOf();

  let useSpecialCharacters = confirm("Would you like to include special characters in your password?");
  let useUpperCaseLetters = confirm("Would you like to include upper case letters in your password?");
  let useLowerCaseLetters = confirm("Would you like to include upper case letters in your password?");
  let useNumbers = confirm("Would you like to include numbers in your password?");

  // if (passwordLength) {
  //   userChoices.push(userPasswordLength);
  // }
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

  console.log(userPasswordLength);

  for (let i = 0; i <= passwordLength; i++) {
    let userSelectionIndex = Math.floor(Math.random() * userChoices.length);
    var userSelection = userChoices[userSelectionIndex];
    userPassword += userSelection[Math.floor(Math.random() * userSelection.length)];
  }
  console.log(userChoices);
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  // userPassword.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
