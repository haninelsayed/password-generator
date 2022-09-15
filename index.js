let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0",
 "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&",
 "*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passLength = 12
let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")
// generating random characters for the first password
function getRandomCharacterOne() {
  let randomChar = Math.floor(Math.random() * characters.length)
  return characters[randomChar]
}
// generating random characters for the second password
function getRandomCharacterTwo() {
  let randomChar = Math.floor(Math.random() * characters.length)
  return characters[randomChar]
}
function generatePass() {
  let randomPasswordOne = ""
  let randomPasswordTwo = ""
  for (let i = 0; i < passLength; i++) {
      randomPasswordOne += getRandomCharacterOne()         
  }
  for (let i = 0; i < passLength; i++) {
    randomPasswordTwo += getRandomCharacterTwo()         
}
  passOne.textContent = randomPasswordOne
  passTwo.textContent = randomPasswordTwo
}