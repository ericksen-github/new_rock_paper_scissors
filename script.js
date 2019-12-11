

// randomly generates number/choice for computer
function computerPlay() {
let result = (Math.floor(Math.random() * 10)) % 3;
    if (result == 0) {
        return "Rock";
    } else if (result == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


// first, takes current scores for each player and assigns them
// next, runs if statement for possible combinations of choices
// once if triggers, assigns resultsText and increments score var
// finishes by adding in new resultsText and scores to html
function playRound(playerSelection, computerSelection) {
    let cScore = document.getElementById("computerScore").innerHTML;
    let pScore = document.getElementById("playerScore").innerHTML;
    let resultsText;

    if (playerSelection == "rock" && computerSelection == "Paper") {
        resultsText =  "You lose! Paper beats Rock!";
        cScore = +cScore + 1;
    } else if (playerSelection == "rock" && computerSelection == "Scissors") {
        resultsText = "You win! Rock beats Scissors!";
        pScore = +pScore + 1;
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        resultsText = "You win! Paper beats Rock!";
        pScore = +pScore + 1;
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        resultsText = "You lose! Scissors beats Paper!";
        cScore = +cScore + 1;
    } else if (playerSelection == "scissors" && computerSelection == "Paper") {
        resultsText = "You win! Scissors beats Paper!";
        pScore = +pScore + 1;
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        resultsText = "You lose! Rock beats Scissors!";
        cScore = +cScore + 1;
    } else {
        resultsText = "It's a tie! Both picked " + computerSelection + ".";
    }

    document.getElementById("roundResults").innerHTML = resultsText;
    document.getElementById("computerScore").innerHTML = cScore;
    document.getElementById("playerScore").innerHTML = pScore;
}


// creates listeners for mouse over/out to change size of icon
let rockIcon = document.getElementById("rock");
let paperIcon = document.getElementById("paper");
let scissorsIcon = document.getElementById("scissors");

rockIcon.addEventListener("mouseover", function() {
    rockIcon.classList.add('mouseOver');
})

rockIcon.addEventListener("mouseout", function() {
    rockIcon.classList.remove('mouseOver');
})

paperIcon.addEventListener("mouseover", function() {
    paperIcon.classList.add('mouseOver');
})

paperIcon.addEventListener("mouseout", function() {
    paperIcon.classList.remove('mouseOver');
})

scissorsIcon.addEventListener("mouseover", function() {
    scissorsIcon.classList.add('mouseOver');
})

scissorsIcon.addEventListener("mouseout", function() {
    scissorsIcon.classList.remove('mouseOver');
})


function resetScores() {
    let resetButton = document.getElementById("resetText");
    document.getElementById("computerScore").innerHTML = 0;
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("roundResults").innerHTML = "Lets play another round!";
}
