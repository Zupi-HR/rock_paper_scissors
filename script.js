function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (randomNumber) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

const playerSelection = "Rock";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors")) {
        return `You win!, Rock beats Scissors`;
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")) {
        return `You win! Paper beats Rock`;
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection.to() === "paper")) {
        return `You win! Scissors beats Paper`;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `It's a draw! ${playerSelection} and ${computerSelection} are same`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }


}

console.log(playRound(playerSelection, computerSelection));
