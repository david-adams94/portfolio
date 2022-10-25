const randNum = Math.floor(Math.random() * 50) + 1;
let guesses = 0;

document.getElementById('submitBtn').onclick = function(){
    let guessNum = document.getElementById('guessField').value;
    guesses++;
    if (guessNum == null || guessNum <= 0 || guessNum > 50){
        document.getElementById('answer').innerHTML += `This is not a valid guess, lets try win in ${guesses + 1} guesses! <br>`;
    } else if(guessNum < randNum){
        document.getElementById('answer').innerHTML += `${guessNum} is too low, lets try win in ${guesses + 1} guesses! <br>`;
    } else if(guessNum > randNum){
        document.getElementById('answer').innerHTML += `${guessNum} is too high, lets try win in ${guesses + 1} guesses! <br>`;
    } else {
        document.getElementById('winningAnswer').innerHTML = `${guessNum} is the winning answer! It took you ${guesses} guesses to win! <br>`;
    }
}