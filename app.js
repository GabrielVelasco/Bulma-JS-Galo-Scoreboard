// global variables
let winningScore = 3;
let isGameOver = false;

// Create players objects
const playerOne = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const playerTwo = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// set initial scores
playerOne.display.textContent = playerOne.score;
playerTwo.display.textContent = playerTwo.score;

// select elements
const resetButton = document.querySelector('#reset');
const playToScoreSelector = document.querySelector('#playto');

function updateScores(playerThatScored, opponent) {
    if (!isGameOver) {
        playerThatScored.score += 1;
        if (playerThatScored.score === winningScore) {
            isGameOver = true;

            // set winner and loser colors
            playerThatScored.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            // disable buttons
            playerThatScored.button.disabled = true;
            opponent.button.disabled = true;
        }

        playerThatScored.display.textContent = playerThatScored.score; // update player score
    }
}

playerOne.button.addEventListener('click', function () {
    updateScores(playerOne, playerTwo)
})

playerTwo.button.addEventListener('click', function () {
    updateScores(playerTwo, playerOne)
})

playToScoreSelector.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let player of [playerOne, playerTwo]) {
        player.score = 0;
        player.display.textContent = player.score;
        player.display.classList.remove('has-text-success', 'has-text-danger'); // reset color
        player.button.disabled = false;
    }
}
