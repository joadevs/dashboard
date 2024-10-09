let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('guessButton').addEventListener('click', () => {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guess = Number(guessInput.value);
    attempts++;

    if (guess === secretNumber) {
        message.textContent = `¡Felicidades! Has adivinado el número ${secretNumber} en ${attempts} intentos.`;
        document.getElementById('restartButton').style.display = 'inline';
    } else if (guess < secretNumber) {
        message.textContent = 'Demasiado bajo. Intenta de nuevo.';
    } else {
        message.textContent = 'Demasiado alto. Intenta de nuevo.';
    }
});

document.getElementById('restartButton').addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('restartButton').style.display = 'none';
});
