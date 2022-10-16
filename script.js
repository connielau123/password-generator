// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

    var options = {
        numberOfChars: 0,
        hasSpecialChars: false,
        hasLowerChars: false,
        hasUpperChars: false,
        hasNumberChars: false,
    }

    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";

    var length = window.prompt("How long would you like your password to be?");

    if (isNaN(length)) {
        window.alert("you must enter a valid number")
    }

    options.numberOfChars = length;

    options.hasLowerChars = confirm("Would you like lower case characters?");

    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
      }
    
    document.getElementById("password").value = password;

    function copyPassword() {
        var copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0, 999);
        document.execCommand("copy");
        }

    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
