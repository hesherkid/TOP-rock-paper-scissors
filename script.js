function playGame() {
    function getComputerChoice() {
        let choices = ["rock", "paper", "scissors"];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        return computerChoice;
    }

    function getHumanChoice() {
        let humanChoice = prompt("Rock, Paper, or Scissors?");
        return humanChoice.toLowerCase();
    }
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(`Human: ${humanChoice} vs Computer: ${computerChoice}`);
        if (computerChoice === humanChoice) {
            return "It's a tie!";
        } else if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ){
            computerScore++;
            return `You Lose! ${computerChoice} beats ${humanChoice}`;
        } else {
            humanScore++;
            return `You Win! ${humanChoice} beats ${computerChoice}`;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }   

    if (humanScore > computerScore) {
        return `You win! Congrats! Human Score: ${humanScore}`;
    } else if (humanScore < computerScore) {
        return `You lose! Computer Score: ${computerScore}`;
    } else {
        return `It's a tie!`;
    }
}

console.log(playGame()); //test