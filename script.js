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