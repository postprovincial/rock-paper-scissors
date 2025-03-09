let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

console.log("Hello World");

function getComputerChoice(){
    randomNumber = Math.random();
    console.log(randomNumber);
    if(randomNumber<=.3){
        console.log("rock");
        computerInput = "rock";
    }
    else if(randomNumber>=.3 && randomNumber<=.6){
        console.log("paper");
        computerInput = "paper";
    }
    else if(randomNumber>=.6){
        console.log("scissors");
        computerInput = "scissors";
    }

    getHumanChoice();
}

let humanInput = "";
let computerInput = "";

function getHumanChoice(){
    humanInput = prompt("Rock, paper, or scissors?");
    console.log(humanInput);
    playRound();
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanInput.toLowerCase();
    computerChoice = computerInput;

    const roundOutcome = humanChoice + "_" + computerChoice;

    //console.log(humanChoice + " succesfully passed.")
    switch (roundOutcome){

    case "rock_paper":
        console.log("You lose! Paper beats rock.");
        computerScore++;
        break;
    case "rock_scissors":
        console.log("You win! Rock beats scissors.");
        humanScore++;
        break;
    case "rock_rock":
        console.log("Tie! Rock ties with rock.");
        break;

    case "paper_paper":
        console.log("Tie! Paper ties with paper.");
        break;
    case "paper_rock":
        console.log("You win! Paper beats rock.");
        humanScore++;
        break;
    case "paper_scissors":
        console.log("You lose! Scissors beats paper.");
        computerScore++;
        break;

    case "scissors_scissors":
        console.log("Tie! Scissors ties with scissors.");
        break;
    case "scissors_rock":
        console.log("You lose! Scissors beats rock.");
        computerScore++;
        break;
    case "scissors_paper":
        console.log("You win! Scissors beats paper.");
        humanScore++;
        break;

    default:
        console.log("Something went wrong! " + roundOutcome);
        break;
    }

    playGame();

}


function playGame(){
    if(roundsPlayed<5){
        roundsPlayed++;
        console.log("Round " + roundsPlayed + ", " + "your score is " + humanScore + " versus CPU's " + computerScore);
        getComputerChoice();
    }
    else{
        console.log("Game over!");
    }
}