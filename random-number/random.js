let guessNum;

document.getElementById('guessSubmit').onclick = function(){
    guessNum = document.getElementById('guessNum').value;
    guessNum = Boolean(guessNum);
    if (guessNum === true) {
        guessNum = document.getElementById('guessNum').value;
        guessNum = Number(guessNum);
        document.getElementById('guessPrompt').innerHTML = `Your guess was ${guessNum}!`;
    } else {
        document.getElementById('guessPrompt').innerHTML = 'Please enter your guess then press submit.';
    }
}

document.getElementById('tenBtn').onclick = function(){
    let randNum = Math.floor(Math.random()*10) + 1;
    document.getElementById('randomNumber').innerHTML = randNum;
    if(randNum === guessNum) {
        document.getElementById('guessOutcome').innerHTML = `Your guess of ${guessNum} was spot on! Try a harder level!`
    } else {
        document.getElementById('guessOutcome').innerHTML = `Your guess of ${guessNum} was not quite right! Try again!`
    }
}

document.getElementById('hundredBtn').onclick = function(){
    let randNum = Math.floor(Math.random()*100) + 1;
    document.getElementById('randomNumber').innerHTML = randNum;
    if(randNum === guessNum) {
        document.getElementById('guessOutcome').innerHTML = `Your guess of ${guessNum} was spot on! Try the even harder level!`
    } else {
        document.getElementById('guessOutcome').innerHTML = `Your guess of ${guessNum} was not quite right! Try again or try the easier level!`
    }
}

document.getElementById('thousandBtn').onclick = function(){
    let randNum = Math.floor(Math.random()*1000) + 1;
    document.getElementById('randomNumber').innerHTML = randNum;
    if(randNum === guessNum) {
        document.getElementById('guessOutcome').innerHTML = `Your guess of ${guessNum} was spot on! Buy a lotto ticket right now!`
    } else {
        document.getElementById('guessOutcome').innerHTML = `Your guess of ${guessNum} was not quite right! Try again or try one of the easier levels!`
    }
}