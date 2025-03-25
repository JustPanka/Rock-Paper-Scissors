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
    return prompt('Rock, paper or scissors?');
}

function playGame() {
    let humanScore = 0,
        computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice);
        if (humanChoice === computerChoice) {
            console.log('It is a tie!');

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

                case "scissors":
                    if (computerChoice === "rock") {
                        console.log("You lost, rock beats scissors.");
                        computerScore++;
                        
                    } else {
                        console.log("You won, scissors beats paper.")
                        humanScore++;
                    } 

                    break;
                
                default:
                    console.log("Unexpected human choice!");
            }
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You are the winner! Congrats!");

    } else {
        console.log("Computer won.");
    }

}

playGame();