let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0",
 "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
 "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["~","`","!","@","#","$","%","^","&",
 "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")

let messageOne = document.getElementById("message-one")
let messageTwo = document.getElementById("message-two")

let noNumbers = document.getElementById("no-numbers")
let noSymbols = document.getElementById("no-symbols")

// generating random characters for the first password
function getRandomCharacterOne(charArray) {
  let randomChar = Math.floor(Math.random() * charArray.length)
  return charArray[randomChar]
}
// generating random characters for the second password
function getRandomCharacterTwo(charArray) {
  let randomChar = Math.floor(Math.random() * charArray.length)
  return charArray[randomChar]
}
function generatePass() {
  let randomPasswordOne = ""
  let randomPasswordTwo = ""

  let passLength = document.getElementById("pass-length").value

  let passCharArray = characters
  
  if (noNumbers.checked && noSymbols.checked) {
    passCharArray = letters
  }
  else if (noNumbers.checked) {
   passCharArray = letters.concat(symbols) 
  }
  else if (noSymbols.checked) {
    passCharArray = letters.concat(numbers)
  }
  
  for (let i = 0; i < passLength; i++) {
    randomPasswordOne += getRandomCharacterOne(passCharArray)
    randomPasswordTwo += getRandomCharacterTwo(passCharArray)
  }
  passOne.textContent = randomPasswordOne
  passTwo.textContent = randomPasswordTwo
}

function copyToClipboard(passElementId) {
    const passElement = document.getElementById(passElementId);
    const passwordText = passElement.textContent;  // Get the text inside the password div

    // Create a temporary textarea element
    const textArea = document.createElement('textarea');
    textArea.value = passwordText; // Set the text value to the password
    document.body.appendChild(textArea); // Append the textarea to the body
    textArea.select(); // Select the text in the textarea
    document.execCommand('copy'); // Execute the copy command to copy the text to the clipboard
    document.body.removeChild(textArea); // Remove the textarea after copying

    // Display the "Copied to clipboard!" message below the clicked password
    const messageElement = document.getElementById(`message-${passElementId.split('-')[1]}`);
    messageElement.textContent = "Copied to clipboard!";
    messageElement.style.display = "block"; // Show the message
    setTimeout(() => {
        messageElement.style.display = "none"; // Hide the message after 2 seconds
    }, 500);
}

// Add event listeners to the password divs
passOne.addEventListener('click', function() {
    copyToClipboard('password-one');  // Copy the text of Password 1 and show message below it
});

passTwo.addEventListener('click', function() {
    copyToClipboard('password-two');  // Copy the text of Password 2 and show message below it
});