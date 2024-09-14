// Randomnumber uses Math.random() to give us a number between 0 and 0.9999999999999.
// Therefore, if the number is between 0 and 1/3 then the computer has chosen "Rock"
// If it is between 1/3 and 2/3 then it has chose "Scissors" and etc...
// The result is stored as the variable computerChoice, which will be the computer's choice

//EDITS. So Randomnumber should be assigned to const instead of outside the function. By placing
//it inside the function, it generates a new value each time 

function getComputerChoice() {
    const Randomnumber = Math.random()
    if  (Randomnumber <= 0.3333333333333333) {
        return "rock";
    } else if (Randomnumber >= 0.6666666666667) {
        return "scissors";
    } else {
        return "paper"
    }
}


// getHumanChoice will return the human's choice in lower case letters.
// Currently, if the user types in a word that is not rock, paper, or scissors,
// it will return that entry in lower case.

//Also place humanChoice inside the function



function getHumanChoice() {
    let humanChoice = prompt("Please enter the single word rock, paper, or scissors. The spelling must be correct although capital or lower case does not matter");
    if (humanChoice.toLowerCase() === "rock") {
        return humanChoice
    } else if (humanChoice.toLowerCase() === "scissors") {
        return humanChoice
    } else {
        return humanChoice;
    }
}




// These are the player score varaibles.
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie! Play again.");
    } else if (humanChoice === "rock" && computerChoice ==="scissors") {
        humanScore++;
        console.log(`Rock beats scissors! You win. Your score:${humanScore}, Computer: ${computerScore}`);
    } else if (humanChoice ==="rock" && computerChoice ==="paper") {
        computerScore++;
        console.log(`Paper beats rock! Computer wins.Your score:${humanScore}, Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice ==="rock") {
        humanScore++;
        console.log(`Paper beats rock! You win. Your score:${humanScore}, Computer: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice ==="scissors") {
        computerScore++;
        console.log(`Scissors beats paper! Computer wins. Your score:${humanScore}, Computer: ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice ==="paper") {
        humanScore++;
        console.log(`Scissors beats paper! You win. Your score:${humanScore}, Computer: ${computerScore}`);
    } else {
        computerScore++;
        console.log(`Rock beats scissors! Computer wins. Your score:${humanScore}, Computer: ${computerScore}`);
    }
}


function playGame() {
    for (let i=0; i < 20; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        if (humanScore===5) {
            console.log("You win!");
            break;
        }
        else if (computerScore===5) {
            console.log("Computer wins!");
            break;
        }
    }
    
}

playGame()