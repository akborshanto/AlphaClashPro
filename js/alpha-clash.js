// function play(){
// /* hidden-homescreen */
//     const homeSection=document.getElementById("home-screen")
//     homeSection.classList.add('hidden')

// /* show-playground */
// const playGround=document.getElementById('play-ground').classList.remove('hidden')

// }

/* keypreess Event javascript */

// function handleEventKEy(e){
// const playerPressed=e.key;
//  //console.log(e.key)
// const currentAlphabetElement=document.getElementById('current-alphabet')
// const cureentAplphabet=currentAlphabetElement.innerText;
// const expectedAlphabed=cureentAplphabet.toLowerCase()
// console.log(cureentAplphabet,playerPressed)

// /* check match or not........ */

// if(playerPressed === expectedAlphabed){

//     console.log("you got a POint")
// }else{
//     console.log("you are lost the Game.....")
// }

// }

function handleKeyboardKeyUpEvent(e) {
  const playerPressed = e.key;
  /* expected-keys */

  const exoectedAlphabet = document
    .getElementById("current-alphabet")
    .innerText.toLowerCase();
//  console.log(exoectedAlphabet, playerPressed);
  /* check right or wrong key preessed.*/
  if (playerPressed === exoectedAlphabet) {
   // console.log(exoectedAlphabet);
    console.log("you  got a point");
    const currentScore=currenttElementScore('current-score')
    console.log(currentScore)
    const newScore=currentScore + 1;
    currentElementScore('current-score',newScore)
    console.log(newScore)
/* get acurrent score */
// const currentElement=document.getElementById('current-score');
// const currentScoreText=currentElement.innerText;
// const currentScore=parseInt(currentScoreText)
// /* increase the score by 1 */
// const newScore=currentScore + 1;
// currentElement.innerText=newScore;




    removeBackgroundColor(exoectedAlphabet);
    continueGame();



  } else  {
    console.log("dhur u miya ply");

  const currentLife=  currenttElementScore('current-life')
  const newLife=currentLife - 1;
  currentElementScore('current-life',newLife)



    /* current-life =========================*/
// const currentLifeElement=document.getElementById("current-life");
// const currentText=currentLifeElement.innerText;
// const currentScoreLife=parseInt(currentText)
// const newLife=currentScoreLife - 1;
// currentLifeElement.innerText=newLife



  }



}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

/*  */
function continueGame() {
  /* step1:generate a random alphabet */
  const alphabet = getRandomAlphabet();
  displayElement("current-alphabet", alphabet);
  //console.log("your alphabet is",alphabet)
  setBackgroundColor(alphabet);
}
function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
