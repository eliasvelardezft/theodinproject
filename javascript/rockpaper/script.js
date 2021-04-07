/* ************** (1) ************** */
/* ************** (2) ************** */
function generateInput() {
    let computerIndex = Math.floor(Math.random() * 3)
    let computerInput = options[computerIndex];
    computerImg.setAttribute('src', `images/${computerInput}.png`);
    document.getElementById('computerInputTxt').textContent = `Computer choice: ${computerInput}`;
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


function main() {
    let roundWinner = undefined;
    console.log(roundWinner);
    while (roundWinner === undefined) {

        while (userCount < 3 && computerCount < 3) {

            let computerInput = generateInput();

            roundWinner = getRoundWinner(userInput, computerInput);
            roundWinnerParagraph.textContent = `The round winner is: ${roundWinner}`;

            if (roundWinner === "user") {
                userCount++;
                userCountP.textContent = `user count: ${userCount}`;
                console.log("usercount: " + userCount)
                if (userCount === 3) {
                    gameWinner = 'user';
                    break;
                }
                return;
            } else if (roundWinner === "computer") {
                computerCount++;
                computerCountP.textContent = `computer count: ${computerCount}`;
                console.log("computercount: " + computerCount);
                if (computerCount === 3) {
                    gameWinner = 'computer';
                    break;
                }
                return;
            }
            
        } 
        console.log("usercount: " + userCount);
        console.log("computercount: " + computerCount);  
        console.log("**************");
        gameWinnerParagraph.textContent = `the game winner is: ${gameWinner}`

        options = ["rock", "paper", "scissors"];
        userCount = 0;
        computerCount =
        user = document.getElementById('player');
        userCountP = document.createElement('p');
        user.appendChild(userCountP);

        computer = document.getElementById('computer');
        computerImg = document.createElement("img");
        computerCountP = document.createElement('p');
        user.appendChild(computerCountP);
        computer.appendChild(computerImg);


        roundWinnerSection = document.getElementById('roundWinner');
        roundWinnerParagraph = document.createElement('p');
        roundWinnerSection.appendChild(roundWinnerParagraph);

        gameWinnerSection = document.getElementById('gameWinner');
        gameWinnerParagraph = document.createElement('p');
        gameWinnerSection.appendChild(gameWinnerParagraph);


        resultsSection = document.getElementById('results');
        restartBtn = document.createElement('button');
        restartBtn.textContent = "Restart";
        resultsSection.appendChild(restartBtn);
        restartBtn.addEventListener('click', function() {
            getUserInput(main);
        });

    }
}

function getUserInput(main) {
    let rock = document.querySelector('#rock');
    let paper = document.querySelector('#paper');
    let scissors = document.querySelector('#scissors');
    let images = [];
    images.push(rock); 
    images.push(paper); 
    images.push(scissors);
    images.forEach(image => image.addEventListener('click', function() {
        userInput = image.id;
        document.querySelector('#playerText').textContent = `You chose: ${userInput}`;
        main();
    }));
} 



/* ************** (4) ************** */ 
let options = ["rock", "paper", "scissors"];
let userCount = 0;
let computerCount = 0;

let user = document.getElementById('player');
let userCountP = document.createElement('p');
user.appendChild(userCountP);
userCountP.textContent = "";

let computer = document.getElementById('computer');
let computerImg = document.createElement("img");
let computerCountP = document.createElement('p');
user.appendChild(computerCountP);
computer.appendChild(computerImg);
computerCountP.textContent = "";
computerImg.setAttribute('src', '');


let roundWinnerSection = document.getElementById('roundWinner');
let roundWinnerParagraph = document.createElement('p');
roundWinnerSection.appendChild(roundWinnerParagraph);
roundWinnerParagraph.textContent = "";

let gameWinnerSection = document.getElementById('gameWinner');
let gameWinnerParagraph = document.createElement('p');
gameWinnerSection.appendChild(gameWinnerParagraph);
gameWinnerParagraph.textContent = "";

getUserInput(main);






