let targetNumber;
let attempts = 5; 

function generateTargetNumber() {
    targetNumber = Math.floor(Math.random() * 100) + 1; 
}

function checkGuess() {
    const guessInput = document.getElementById('guess-input');
    const feedbackElement = document.getElementById('feedback');
    const attemptsElement = document.getElementById('attempts');

    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedbackElement.textContent = 'Please enter a valid number between 1 and 100.';
        return; 
    }

    attempts--; 

    if (guess === targetNumber) {
        feedbackElement.textContent = `Congratulations! You guessed the number in ${5 - attempts} attempts.`;
        attemptsElement.textContent = attempts;
        disableInput();
    } else if (attempts === 0) {
        feedbackElement.textContent = `Game over! You've run out of attempts. The number was ${targetNumber}.`;
        attemptsElement.textContent = attempts;
        disableInput();
    } else if (guess < targetNumber) {
        feedbackElement.textContent = 'Too low. Try again.';
        attemptsElement.textContent = attempts;
    } else {
        feedbackElement.textContent = 'Too high. Try again.';
        attemptsElement.textContent = attempts;
    }

    guessInput.value = ''; 
}

function restartGame() {
    generateTargetNumber();
    attempts = 5; 
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = attempts;
    enableInput();
}

function disableInput() {
    document.getElementById('guess-input').disabled = true;
    document.getElementById('guess-btn').disabled = true;
}

function enableInput() {
    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-btn').disabled = false;
}

document.getElementById('guess-btn').addEventListener('click', checkGuess);
document.getElementById('restart-btn').addEventListener('click', restartGame);

generateTargetNumber(); 