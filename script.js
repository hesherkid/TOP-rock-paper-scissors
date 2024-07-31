const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
const scoreDiv = document.querySelector("#score");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

let humanScore = 0;
let computerScore = 0;  

const outcomeDiv = document.querySelector("#outcome");
const humanScoreSpan = document.querySelector("#humanScore");
const computerScoreSpan = document.querySelector("#computerScore");

function playRound(humanChoice, computerChoice) {
    outcomeDiv.textContent = '';

    const para = document.createElement("p");

    if (computerChoice === humanChoice) {
        para.textContent = "It's a tie!";
    } else if (computerChoice === "rock" && humanChoice === "scissors" ||
               computerChoice === "paper" && humanChoice === "rock" ||
               computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        para.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
    } else {
        humanScore++;
        para.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
    }

    outcomeDiv.appendChild(para);

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    if (humanScore === 5 || computerScore === 5) {
        checkForWinner();
    }
}

function checkForWinner() {
    const h2 = document.createElement("h2");
    if (humanScore === 5) {        
        h2.textContent = `You win! Congrats!`;
    } else if (computerScore === 5) {
        h2.textContent = `You lose! Better luck next time!`;
    }

    scoreDiv.appendChild(h2);

    humanScore = 0;
    computerScore = 0;

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    outcomeDiv.textContent = '';

    setTimeout(() => h2.remove(), 5000);
}


rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));