function hideElementById(elementId) {
  const hideElementById = document.getElementById(elementId);
  hideElementById.classList.add("hidden");
}
function showElementById(elementId) {
  const showElementById = document.getElementById(elementId);
  showElementById.classList.remove("hidden");
}

/* alphabed */

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //console.log(alphabets)

  /* get Random number */
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  //console.log(index)

  const alphabet = alphabets[index];
  //console.log(index,alphabet)
  return alphabet;
}
/* display */
function displayElement(elementId, alphabet) {
  const elementText = (document.getElementById(elementId).innerText = alphabet);
  return elementText;
}
/* setcssbg */
function setBackgroundColor(elementId) {
  const cssStyle = document
    .getElementById(elementId)
    .classList.add("bg-orange-600");
}

function removeBackgroundColor(elementId) {

    const element=document.getElementById(elementId).classList.remove('bg-orange-600')
    return element;
}
/* gettext */
function getTextElementById(element){

  const elements=document.getElementById(element)
  const text=elements.innerText;
  return text
  
  
  }

/* currentscore */

function currenttElementScore(element){
const elements=document.getElementById(element)

const currentScoreText=elements.innerText;
const value=parseInt(currentScoreText)
return value;

}
function  currentElementScore(element,value){

const elements=document.getElementById(element).innerText=value;



}
function gameOver(){



  hideElementById('play-ground')
  showElementById('final-round')
/* endscroe */
const endScore=currenttElementScore('current-score')
currentElementScore('last-score',endScore)
console.log(endScore)
}

