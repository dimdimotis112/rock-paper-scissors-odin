function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerSelection, computerChoice) {
    playerSelection = playerSelection.toLowerCase(); // makes the player choice (input) case insesnitive.
    switch (playerSelection) {
        case 'rock':
            switch (computerChoice) {
                case 'Rock':
                    return "It's a draw! Rock vs Rock.";
                case 'Paper':
                    return "You lose! Paper beats Rock.";
                case 'Scissors':
                    return "You win!. Rock beats Scissors.";
            }
        case 'paper':
            switch (computerChoice) {
                case 'Rock':
                    return "You win! Paper beats Rock.";
                case 'Paper':
                    return "It's a draw! Paper vs Paper.";
                case 'Scissors':
                    return "You lose! Scissors cuts Paper.";
            }
        case 'scissors':
            switch (computerChoice) {
                case 'Rock':
                    return "You lose! Rock beats Scissors.";
                case 'Paper':
                    return "You win! Scissors cuts Paper.";
                case 'Scissors':
                    return "It's a draw! Scissors vs Scissors.";
            }
        default:
            return `Wrong choice ${playerSelection} isn't a playable option.`;
    }
}

function game(result) {
    if (result.includes("You win")) {
        console.log(`${result}`);
        playerScore++;
    } else if (result.includes("You lose")) {
        console.log(`${result}`);
        computerScore++;
    } else {
        console.log(`${result}`);
        draws++;
    }

    if (playerScore === 5) {
        resultOutcome.textContent = "Player wins by reaching the score of 5 first.";
        resultOutcome.style.color = "darkgreen";
        resultOutcome.style.fontSize = "24px";
    } else if (computerScore === 5) {
        resultOutcome.textContent = "Computer wins by reaching the score of 5 first.";
        resultOutcome.style.color = "darkred";
        resultOutcome.style.fontSize = "24px";
    } else {
        resultOutcome.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}, Draws: ${draws}`
    }

    resultDiv.appendChild(resultOutcome);

}

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result');
const resultOutcome = document.createElement('div');

// Keeps track of the scores.
let playerScore = 0;
let computerScore = 0;
let draws = 0;

for (let button of buttons) {
    let conclusion;
    button.addEventListener('click', () => game(play(button.id, getComputerChoice())));
}