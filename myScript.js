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