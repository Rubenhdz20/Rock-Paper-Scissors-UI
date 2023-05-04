let userScore = 0; 
let computerScore = 0; 
const userSpan = document.querySelector('#user-score');
const computerSpan = document.querySelector('#computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result');
const rockDiv = document.querySelector('#rock');
const paperDiv = document.querySelector('#paper');
const scissorsDiv = document.querySelector('#scissors');
  
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function win(user, computer) {
    userScore++;
    userSpan.textContent = userScore;
    resultDiv.textContent = `${user} beats ${computer}, You win!!`
}

function lose(user, computer) {
    computerScore++;
    computerSpan.textContent = computerScore;
    resultDiv.textContent = `${computer} beats ${user}, You lose!!`
}

function draw() {
    resultDiv.textContent = `It is a draw!!`
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock": 
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor": 
            draw(userChoice, computerChoice);
            break;
    }
}

rockDiv.addEventListener('click', function() {
    playRound('rock');
});

paperDiv.addEventListener('click', function() {
    playRound('paper');
});

scissorsDiv.addEventListener('click', function() {
    playRound('scissors');
});