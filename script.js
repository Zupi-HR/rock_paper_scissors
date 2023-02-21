const container = document.querySelector('.container');
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const buttons = document.querySelectorAll('button');

let textDiv = document.createElement('div');
let gameDiv = document.createElement('div');

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

let gameIsFinished = false;



btnRock.addEventListener('click', function () {
    checkWinner();
    if (gameIsFinished === false) {
        let computerChoice = computerPlay();
        let result = playRound("rock", computerChoice);
        textDiv.textContent = result;
        container.appendChild(textDiv);
        gameDiv.textContent = game();
        container.appendChild(gameDiv);
    } 
    
})

btnPaper.addEventListener('click', function () {
    checkWinner();
    if (gameIsFinished === false) {
        let computerChoice = computerPlay();
        let result = playRound("paper", computerChoice);
        textDiv.textContent = result;
        container.appendChild(textDiv);
        gameDiv.textContent = game();
        container.appendChild(gameDiv);
    }
})

btnScissors.addEventListener('click', function () {
    checkWinner();
    if (gameIsFinished === false) {
        let computerChoice = computerPlay();
        let result = playRound("scissors", computerChoice);
        textDiv.textContent = result;
        container.appendChild(textDiv);
        gameDiv.textContent = game();
        container.appendChild(gameDiv);
    }
})



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
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore > computerScore) {
            return `Your score is: ${playerScore}, computer score is: ${computerScore}, so you win!`
        } else if (computerScore > playerScore) {
            return `Your score is: ${playerScore}, computer score is: ${computerScore}, so computer win!`;

        } else {
            return `Your score is: ${playerScore}, computer score is: ${computerScore}, so it's a draw!`;
        }
    } else {
        return (`Your score is: ${playerScore}, computer score is: ${computerScore}`);
    }
}

function checkWinner() {
    if (playerScore >= 5 || computerScore >= 5) {
        gameIsFinished = true;
    }
}
