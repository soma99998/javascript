// setting for game name

let gameName = " Guess The Word ";
document.title = gameName;
document.querySelector('h1').innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} game created by elzero school`;


// setting game options 

let numbersOfTries = 6;

let numberOfLetters= 6;

let currentTry = 1;

let numberOfHints = 2; 
// manage words 

let wordToGuess= '';
const words = ['Create','Update','Master','Branch','Mainly'];
let messageArea = document.querySelector('.message');

// manage hints


document.querySelector('.hint span').innerHTML = numberOfHints;

const getHintButton = document.querySelector('.hint');
getHintButton.addEventListener("click",getHint)

wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(wordToGuess);
function generateInput (){
    const inputsContainer = document.querySelector('.inputs');
    for(let i =1; i<=numbersOfTries; i++){
        const tryDiv = document.createElement('div');
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML =` <span>try ${i}</span>`;
        if(i !== 1){
            tryDiv.classList.add('disabled-inputs');
        }
        // create inputs
        for(let j = 1; j <= numberOfLetters;j++){
            const input = document.createElement('input');
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute('maxlength','1');
             tryDiv.appendChild(input); 
  
        }
     inputsContainer.appendChild(tryDiv);   
    }
    inputsContainer.children[0].children[1].focus();

    // disable all inputs expect first one 
    const inputsInDisabledDiv = document.querySelectorAll(".disabled-inputs input");
    inputsInDisabledDiv.forEach((input)=>{input.disabled = true});
     
    const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {

    // تحويل الحروف لـ uppercase
    input.addEventListener("input", function () {
        this.value = this.value.toUpperCase();
        const nextInput = inputs[index + 1];
        if (nextInput) nextInput.focus();
    });

    // التعامل مع الكيبورد (مثلاً زرار backspace)
    input.addEventListener("keydown", function (e) {
        const currentIndex = Array.from(inputs).indexOf(e.target); // or this 
       // console.log(currentIndex);
        if(e.key === 'ArrowRight'){
            const nextInput = currentIndex + 1;
            if(nextInput < inputs.length) inputs[nextInput].focus();
        }
         if(e.key === 'ArrowLeft'){
            const prevInput = currentIndex - 1;
            if(prevInput >= 0 ) inputs[prevInput].focus();
        }
    });

});
}

const guessButton = document.querySelector('.check');
guessButton.addEventListener('click',handleGuesses);

function handleGuesses (){
let sucessGuess = true;
for(let i = 1; i<= numberOfLetters ; i++){
    const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`);
    const letter = inputField.value.toLowerCase();
    //console.log(letter);
    const actualLetter = wordToGuess[i - 1];
    console.log(actualLetter);
    //game logic

    if(letter === actualLetter){
        // letter is correct and in place 
        inputField.classList.add('yes-in-place');
    }else if(wordToGuess.includes(letter) && letter !== ''){
          // letter is correct and  not in place 
    
         inputField.classList.add('not-in-place');
         sucessGuess = false;
    }else{
             inputField.classList.add('no');
                sucessGuess = false;
    }

}
//check if user win or lose

if(sucessGuess){
   
messageArea.innerHTML = `you won the word is ${wordToGuess} `;


if(numberOfHints === 2){

    messageArea.innerHTML = `congration you didnot use hints `;
}

// disable all input 

let allTries = document.querySelectorAll('.inputs > div');
allTries.forEach((tryDiv)=> tryDiv.classList.add('disabled-inputs'));

// disable guess button 

guessButton.disabled = true;
getHintButton.disabled = true;

}else{

messageArea.innerHTML = `you lose the word is not  ${wordToGuess} `;
document.querySelector(`.try-${currentTry}`).classList.add('disabled-inputs');
const currentTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
currentTryInputs.forEach((input)=>input.disabled = true);
currentTry++;
//console.log(currentTry);
document.querySelector(`.try-${currentTry}`).classList.remove('disabled-inputs');
const nextTryInput = document.querySelectorAll(`.try-${currentTry} input`);
nextTryInput.forEach((input)=>input.disabled = false);

let el = document.querySelector(`.try-${currentTry}`);

if(el){
    document.querySelector(`.try-${currentTry}`).classList.remove('disabled-inputs');
    el.children[1].focus();
}else{
    // disabled guess button 

    guessButton.disabled = true ;
    
getHintButton.disabled = true;
    messageArea.innerHTML = `you lose the word is ${wordToGuess}`;
}

}
}

function getHint(){
    if(numberOfHints > 0)
        numberOfHints--;
    document.querySelector('.hint span').innerHTML = numberOfHints;
    if(numberOfHints === 0){
        getHintButton.disabled = true;
 
    }
    const enabledInputs = document.querySelectorAll('input:not([disabled]) ');
    const emptyEnaledInput = Array.from(enabledInputs).filter((input)=> input.value ==='');
    if(emptyEnaledInput.length > 0){
const randamIndex = Math.floor(Math.random() * emptyEnaledInput.length );
const randamInput = emptyEnaledInput[randamIndex];
const indexToFill = Array.from(enabledInputs).indexOf(randamInput);


if(indexToFill !== -1){
    randamInput.value = wordToGuess[indexToFill].toUpperCase();
}
    }
}

function handleBackSpace (e){
if(e.key === 'Backspace'){
    const inputs = document.querySelectorAll('input:not([disabled])');
   const currentIndex = Array.from(inputs).indexOf(document.activeElement);
   if(currentIndex > 0){
    const currentInput = inputs[currentIndex];
    const prevInput = inputs[currentIndex - 1];
    currentInput.value ='';
    prevInput.value ='';
    prevInput.focus();
   }

}
}
document.addEventListener('keydown',handleBackSpace);
window.onload = function (){
    generateInput();
}