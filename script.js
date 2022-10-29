// String variables to build generatePassword
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacter = "!#$%&'()*+,-./:;<=>?@][^_`{|}~";
let setToInclude = [];
let userPassword = "";
let generateBtn = document.querySelector("#generate");

// Function to generate prompts from user to add to array
function generatePassword() {
  let passwordLength = prompt("Please enter the number of characters for your password.");
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters in length.");
    passwordLength = prompt("Please enter the number of characters for your password.");
  }

  let userPasswordLength = passwordLength.valueOf();

  let useSpecialCharacters = confirm("Would you like to include special characters in your password?");
  let useUpperCaseLetters = confirm("Would you like to include upper case letters in your password?");
  let useLowerCaseLetters = confirm("Would you like to include upper case letters in your password?");
  let useNumbers = confirm("Would you like to include numbers in your password?");

  if (passwordLength) {
    setToInclude.push(userPasswordLength);
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
  }

  console.log(userPasswordLength);

  // console.log(setToInclude);
  for (let i = 0; i < userPasswordLength; i++) {
    setToInclude += userPassword[Math.floor(Math.random() * userPassword.length)];
  }
  // for (let i = 0; i < passwordLength; i++) {
  //   let userSelectionIndex = Math.floor(Math.random() * setToInclude.length);
  //   // var userSelection = setToInclude[userSelectionIndex];
  //   userPassword += setToInclude[userSelectionIndex];
  // }
  // console.log(userPassword);
  return;
}

// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  // userPassword.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
