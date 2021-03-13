/* 
1) pedir al usuario un userInput entre rock, paper o scissors
convertir ese userInput en todo lowercase para que se ajuste a la lista de opciones

2) hacer que la computadora elija aleatoriamente entre la lista de opciones

3) hacer el switch case para devolver el ganador en las distintas combinaciones

4) ejecutar todo etc 
*/



/* ************** (1) ************** */
function isValid(userInput) {
    if (options.includes(userInput)) {
        return true;
    }
    return false;
}
/* ************** (2) ************** */
function generateInput() {
    let computerIndex = Math.floor(Math.random() * 3)
    let computerInput = options[computerIndex];
    return computerInput;
}

/* ************** (3) ************** */ 
function getRoundWinner(user, computer) {
    let roundWinner = undefined;
    if (user === "rock" && computer === "scissors" || 
        user === "scissors" && computer === "paper" ||
        user === "paper" && computer === "rock") {
            roundWinner = "user";
        }
    else if (computer === "rock" && user === "scissors" || 
    computer === "scissors" && user === "paper" ||
    computer === "paper" && user === "rock") {
        roundWinner = "computer"; 
    }
    else {
        roundWinner = "tie";
    }
    return roundWinner;
}

function getRoundMessage(roundWinner) {
    let message = undefined;
    if (roundWinner === "user") {
        message = "You win the round!"
    }
    else if (roundWinner === "computer") {
        message = "The computer wins the round :("
    }
    else {
        message = "It's a tie round!"
    }
    return message;
}

/* ************** (4) ************** */ 
let roundWinner = undefined;
let options = ["rock", "paper", "scissors"];
while (roundWinner === undefined) {
    let userCount = 0;
    let computerCount = 0;

    while (userCount < 3 && computerCount < 3) {
        let userInput = -1
        while (userInput === -1) {
            userInput = prompt("Enter an option: ROCK, PAPER or SCISSORS");
            if (isValid(userInput)) {
                break;
            }
            else {
                console.log("Input not valid :(");
                userInput = -1;
            }
        }
        userInput = userInput.toLowerCase();
        console.log(`Your input is: ${userInput}`);

        let computerInput = generateInput();
        console.log(`The computer's input is: ${computerInput}`);

        roundWinner = getRoundWinner(userInput, computerInput);
        let message = getRoundMessage(roundWinner);
        console.log(message);

        if (roundWinner === "user") {
            userCount = userCount + 1;
            getRoundMessage(roundWinner);
            console.log(`User: ${userCount}`)
        } else if (roundWinner === "computer") {
            computerCount = computerCount + 1;
            getRoundMessage(roundWinner);
            console.log(`Computer: ${computerCount}`);
        }

    }   
    let gameWinner = (userCount >= 3) ? "user" : "computer";
    let gameMessage = `The winner is: ${gameWinner}!`;
    console.log(gameMessage);
}

