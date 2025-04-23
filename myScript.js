console.log("Game starts");

function getComputerChoice(){
    let choice = '';
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0){
        choice = "rock";
    } else if(randomNumber === 1){
        choice = "paper";
    } else if(randomNumber === 2){
        choice = "scissors";
    }
    return choice;
}

function getHumanChoice() {
    return prompt('Rock, paper or scissors?');
}

function displayRoundResult(roundResult){
    document.querySelector('#roundResultDiv').textContent = roundResult;
}

let humanScore = 0,
    computerScore = 0;

function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    let computerChoice = getComputerChoice();

    console.log('Human choice: ' + humanChoice);

    if (humanChoice === computerChoice) {
        displayRoundResult('It is a tie!');

    } else {
        switch(humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    displayRoundResult("You lost, paper beats rock.");
                    computerScore++;
                    
                } else {
                    displayRoundResult("You won, rock beats scissors.")
                    humanScore++;
                }

                break;

            case "paper":
                if (computerChoice === "scissors") {
                    displayRoundResult("You lost, scissors beats paper.");
                    computerScore++;
                    
                } else {
                    displayRoundResult("You won, paper beats rock.")
                    humanScore++;
                }

                break;

            case "scissors":
                if (computerChoice === "rock") {
                    displayRoundResult("You lost, rock beats scissors.");
                    computerScore++;
                    
                } else {
                    displayRoundResult("You won, scissors beats paper.")
                    humanScore++;
                } 

                break;
            
            default:
                displayRoundResult("Unexpected human choice!");
        }
    }

    let resultDiv = document.querySelector('#results');
    resultDiv.textContent = `Human score: ${humanScore}, computer score: ${computerScore}.`;

    checkIfGameOver(humanScore,computerScore);
}

function checkIfGameOver(hScore, cScore) {
    let announceWinner = document.querySelector('#announceWinnerDiv');
    if(hScore >= 5) {
        announceWinner.textContent = 'You won! Congrats';
    }
    else if(cScore >= 5) {
        announceWinner.textContent = 'Computer won.';
    }
}