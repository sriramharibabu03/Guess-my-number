'use strict'
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function setMessage(className, message) {
    document.querySelector(`.${className}`).textContent = message;
}

// function process() {
document.querySelector(".check").addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        setMessage('message', 'You stupid person guess');
    } else if (guess === secretNumber) {
        setMessage('message', 'You have won');
        if (highScore < score) {
            highScore = score;
            setMessage('highscore', highScore);
        }
        setMessage('number', secretNumber);
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
        if (score > 1) {
            setMessage('message', 'Too high');
            score--;
            setMessage('score', score);
        } else {
            setMessage('message', 'You lost the game');
            setMessage('score', 0);
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            setMessage('message', 'Too low');
            score--;
            setMessage('score', score);
        } else {
            setMessage('message', 'You lost the game');
            setMessage('score', 0);
        }
    }
});
// }

document.querySelector(".again").addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
    setMessage('message', 'Start guessing...');
    setMessage('number', '?');
    document.querySelector(".guess").value = '';
    secretNumber = Math.floor(Math.random() * 20 + 1);
    score = 20;
    setMessage('score', 20);
});