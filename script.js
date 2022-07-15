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

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() === "rock") && (computerSelection.toLowerCase() === "scissors")) {
        playerScore++;
        return `You win!, Rock beats Scissors`;
    } else if ((playerSelection.toLowerCase() === "paper") && (computerSelection.toLowerCase() === "rock")) {
        playerScore++;
        return `You win! Paper beats Rock`;
    } else if ((playerSelection.toLowerCase() === "scissors") && (computerSelection.toLowerCase() === "paper")) {
        playerScore++;
        return `You win! Scissors beats Paper`;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `It's a draw! ${playerSelection} and ${computerSelection} are same`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }

}

function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("Your turn:");
        computerSelection = computerPlay();
        const game = playRound(playerSelection, computerSelection);
        console.log(game);
    }
    if (playerScore > computerScore) {
        console.log(`Your score is: ${playerScore}, computer score is: ${computerScore}, so you win!`)
    } else if (computerScore > playerScore) {
        console.log(`Your score is: ${playerScore}, computer score is: ${computerScore}, so computer win!`);
    } else {
        console.log(`Your score is: ${playerScore}, computer score is: ${computerScore}, so it's a draw!`);
    }
}

game();
