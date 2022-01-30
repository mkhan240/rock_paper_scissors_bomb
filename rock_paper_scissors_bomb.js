const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput;
    } else {
        console.log("Error!");
    }
};

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "bomb";
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === "bomb") {
        return "You Won!"
    } else if (userChoice === computerChoice) {
        return "game was a tie";
    } else {
        switch (userChoice === "rock") {
            case (computerChoice === "paper"):
                return "You Lost!";
            case (computerChoice === "scissors"):
                return "You Won!";
        }
        switch (userChoice === "paper") {
            case (computerChoice === "rock"):
                return "You Won!";
            case (computerChoice === "scissors"):
                return "You Lost!";
        }
        switch (userChoice === "scissors") {
            case (computerChoice === "rock"):
                return "You Lost!";
            case (computerChoice === "paper"):
                return "You Won!";
        }
    }
}

function playGame() {
    let userChoice = getUserChoice("bomb");
    let computerChoice = getComputerChoice();
    console.log(`You got ${userChoice} and the computer got ${computerChoice}.`)

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();