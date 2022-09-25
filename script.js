function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

function play(playerSelection, computerChoice) {
    console.log(`The computer choice == ${computerChoice}`);
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            switch (computerChoice) {
                case 'Rock':
                    console.log("It's a draw! Rock vs Rock.");
                    break;
                case 'Paper':
                    console.log("You lose! Paper beats Rock.");
                    break;
                case 'Scissors':
                    console.log("You win!. Rock beats Scissors.");
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice) {
                case 'Rock':
                    console.log("You win! Paper beats Rock.");
                    break;
                case 'Paper':
                    console.log("It's a draw! Paper vs Paper.");
                    break;
                case 'Scissors':
                    console.log("You lose! Scissors cuts Paper.");
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice) {
                case 'Rock':
                    console.log("You lose! Rock beats Scissors.");
                    break;
                case 'Paper':
                    console.log("You win! Scissors cuts Paper.");
                    break;
                case 'Scissors':
                    console.log("It's a draw! Scissors vs Scissors.");
                    break;
            }
            break;
        default:
            console.log(`Wrong choice ${playerSelection} isn't a playable option.`);
    }
}