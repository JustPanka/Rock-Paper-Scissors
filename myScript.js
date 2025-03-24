console.log("Hello World");

function getComputerChoice(){
    let choice = '';
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        choice = "rock";
    } else if(randomNumber === 1){
        choice = "paper";
    } else if(randomNumber === 2){
        choice = "scissor";
    }
    return choice;
}

function getHumanChoice() {
    return prompt('Rock, paper or scissor?');
}

let humanScore = 0,
    computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    if (humanChoice === computerChoice) {
        prompt('It is a tie, try again!');

    } else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    console.log("You lost, paper beats rock.");
                    computerScore++;
                    
                } else {
                    console.log("You won, rock beats scissors.")
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    console.log("You lost, scissors beats paper.");
                    computerScore++;
                    
                } else {
                    console.log("You won, paper beats rock.")
                    humanScore++;
                }
              break;
            default:
              // code block
        }
    }

    return prompt('You lose! Paper beats Rock.')
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
