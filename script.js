// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", ":", "<", ">", "?", "[", "]", ";", ",", ".", "/"];
  var requests = []; 
  var output = "";


  var passwordLength = parseInt(prompt("How long do you want your password to be?"));

  if (passwordLength < 8) {
    alert("Your password must contain at least 8 characters");
    return
  }

  if (passwordLength > 128) {
    alert("Your password must contain no more than 128 characters");
    return
  }

  var wantsLowers = confirm("Do you want password to contain lower case letters?");
  var wantsUppers = confirm("Do you want password to contain upper case letters?");
  var wantsNumbers = confirm("Do you want password to contain numbers?");
  var wantsSpecials = confirm("Do you want password to contain special characters?");


  if (wantsLowers) {
    requests.push(lowers);
  }

  if (wantsUppers) {
    requests.push(uppers);
  }

  if (wantsNumbers) {
    requests.push(numbers);
  }

  if (wantsSpecials) {
    requests.push(specials);
  }


  for (var i = 0; i < passwordLength; i++) {
    var randomArray = requests[Math.floor(Math.random() * requests.length)];
    var randomChar = randomArray[Math.floor(Math.random() * randomArray.length)];
    output += randomChar;
  }

  return output;


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword); 
