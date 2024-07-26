const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorsButton = document.querySelector("#Scissors");
const scoreDiv = document.querySelector("#score");

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;  

function playRound(humanChoice, computerChoice) {
    const outcomeDiv = document.querySelector("#outcome");
    if (computerChoice === humanChoice) {
        const para = document.createElement("p");
        para.textContent = "It's a tie!";
        outcomeDiv.appendChild(para);
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        const para = document.createElement("p");
        para.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        outcomeDiv.appendChild(para);
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        const para = document.createElement("p");
        para.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        outcomeDiv.appendChild(para);
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        const para = document.createElement("p");
        para.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        outcomeDiv.appendChild(para);
    } else {
        humanScore++;
        const para = document.createElement("p");
        para.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        outcomeDiv.appendChild(para);
    }
}

function checkForWinner (humanScore, computerScore) {
    if (humanScore === 5) {
        const h2 = document.createElement("h2");
        h2.textContent = `You win! Congrats! Human Score: ${humanScore}`;
        scoreDiv.appendChild(h2);
        } else if (computerScore === 5) {
            const h2 = document.createElement("h2");
            h2.textContent = `You lose! Computer Score: ${computerScore}`;
            scoreDiv.appendChild(h2);
        }
    }
        
// function playGame() {        
    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     console.log(playRound(humanSelection, computerSelection));
    // }   

    
// }

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = "rock";
    playRound(humanSelection, computerSelection);
    checkForWinner(humanScore, computerScore);
})

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = "paper";
    playRound(humanSelection, computerSelection);
    checkForWinner(humanScore, computerScore);
})

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = "scissors";
    playRound(humanSelection, computerSelection);
    checkForWinner(humanScore, computerScore);
})

