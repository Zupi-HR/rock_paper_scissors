const container = document.querySelector('.container');
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const buttons = document.querySelectorAll('button');

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;




if (playerScore <= 2 && computerScore <= 2) {
    btnRock.addEventListener('click', function () {
        let computerChoice = computerPlay();
        let result = playRound("rock", computerChoice);
        let div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);

        let gameDiv = document.createElement('div');
        gameDiv.textContent = game();
        container.appendChild(gameDiv);
    })

    btnPaper.addEventListener('click', function () {
        let computerChoice = computerPlay();
        const result = playRound('paper', computerChoice);
        const div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);

        let gameDiv = document.createElement('div');
        gameDiv.textContent = game();
        container.appendChild(gameDiv);
    })

    btnScissors.addEventListener('click', function () {
        let computerChoice = computerPlay();
        const result = playRound('scissors', computerChoice);
        const div = document.createElement('div');
        div.textContent = result;
        container.appendChild(div);

        const gameDiv = document.createElement('div');
        gameDiv.textContent = game();
        container.appendChild(gameDiv);
    })
};




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

    if (playerScore > computerScore) {
        return `Your score is: ${playerScore}, computer score is: ${computerScore}, so you win!`
    } else if (computerScore > playerScore) {
        return `Your score is: ${playerScore}, computer score is: ${computerScore}, so computer win!`;
    } else {
        return `Your score is: ${playerScore}, computer score is: ${computerScore}, so it's a draw!`;
    }
}



