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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;


    if (playerScore > computerScore) {
        console.log(`You won with a score ${playerScore} to ${computerScore}, with ${draws} draw/s.`);
    } else if (playerScore < computerScore) {
        console.log(`You lost with a score ${playerScore} to ${computerScore}, with ${draws} draw/s.`);
    } else {
        console.log(`It's a tie with ${playerScore} to ${computerScore}, with ${draws} draw/s.`);
    }

}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', () => console.log(play(button.id, getComputerChoice())))
}