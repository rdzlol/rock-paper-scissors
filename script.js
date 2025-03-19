let ComputerScore = 0;
let PlayerScore = 0;

function computerPlay() {
    let ch = Math.floor(Math.random() * 3) + 1;
    if (ch == 1) {
        return "rock";
    } else if (ch == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerPlay() {
    let ch = prompt("Enter your choice: ");
    return ch.toLowerCase()
}

function playRound(playerPlay, computerPlay) {
    if (playerPlay == computerPlay) {
        return "It's a tie.";
    } else if (playerPlay == "rock" && computerPlay == "scissors") {
        return "You win as rock beats scissors."
    } else if (playerPlay == "rock" && computerPlay == "paper") {
        return "You lose as paper beats rock."
    } else if (playerPlay == "paper" && computerPlay == "rock") {
        return "You win as paper beats rock."
    } else if (playerPlay == "paper" && computerPlay == "scissors") {
        return "You lose as scissors beats paper."
    }
    else if (playerPlay == "scissors" && computerPlay == "rock") {
        return "You lose as rock beats scissors."
    } else if (playerPlay == "scissors" && computerPlay == "paper") {
        return "You win as scissors beats paper."
    } else {
        return "Invalid input."
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let e = playRound(playerSelection, computerSelection);
        if (e.includes("win")) {
            PlayerScore++;
        } else if (e.includes("lose")) {
            ComputerScore++;
        }
        alert(e);
        console.log(playRound(playerSelection, computerSelection));
    }
    alert("Player Score: " + PlayerScore + " Computer Score: " + ComputerScore);
}

playGame();