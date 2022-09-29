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
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;


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

    resultOutcome.textContent = result;
    resultDiv.appendChild(resultOutcome);

}

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result');
const resultOutcome = document.createElement('div');

for (let button of buttons) {
    let conclusion;
    button.addEventListener('click', () => game(play(button.id, getComputerChoice())));
}