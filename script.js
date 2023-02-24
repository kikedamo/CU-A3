let passwordText = document.getElementById("password");
let PwdBtn = document.getElementById("generate");
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

PwdBtn.addEventListener("click", writePassword)

function test(array){
  let randomIndex = Math.floor(Math.random() * array.length);
  // console.log("random", randomPassword)
  let randomElement = array[randomIndex];
  return randomElement;
};

function writePassword(){
  const password = generatePassword();
  passwordText.innerHTML = password;
}

function getPasswordOptions(){
  const length = parseInt(prompt("How many characters would you like your password to contain?"));
  const hasNumber = confirm("Click OK to confirm numeric characters!");
  const hasUpperCase = confirm("Click OK to confirm uppercase characters!");
  const hasLowerCase = ("Click OK to confirm lowercase characters!");
  const passwordOptions = {
    length: length,
    hasNumber: hasNumber,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
  };
  return passwordOptions;
};

function generatePassword(){
  const options = getPasswordOptions();
  let result = [];
  let possibleCharacters = [];
  console.log("options", options);
  if (options.length <= 8){
    alert("The Numeric Characters has to be 8 or more!");
    return null;
  }
  if (options.length >= 128){
    alert("The Numeric Characters has to be 128 or less!");
    return null;
  }
  if (options.hasNumber){
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    //if hasNumber is true, it'll get a random element from number Array and push into the array!
  };
  if (options.hasUpperCase){
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  };
  if (options.hasLowerCase){
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  };
  for (i = 0; i < options.length; i++){
    let possibleCharacter = test(possibleCharacters);
    result.push(possibleCharacter);
  }
  return result.join("");
};

// const newObject = {
//   color: "blue",
//   brand: "Toyota",
//   Year: 2010,
//   Doors: ["left", "right"],
// }
// console.log(newObject.color);
// newObject.color = "yellow"
// console.log(newObject.color)