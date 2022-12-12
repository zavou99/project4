const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissor");
const divresults = document.querySelector(".results");
let compouterscore = 0;
let playerscore = 0;
let ties = 0;

rock.addEventListener("click", () => {
      console.log(game("rock"));
});

paper.addEventListener("click", () => {
     console.log(game("paper"));
});

scissors.addEventListener("click", () => {
     console.log(game("scissor"));
});


const computerPlay = () => {
let computerChoice = Math.floor(Math.random() * 3); 
  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissor";
      break;

  }

  return computerChoice;
};

const updateUI = (compSelection, humanSelection, result) => {
  let textContent = '';

  if (result === "computer") compouterscore++;
  else if (result == "player") playerscore++;
  else ++ties;

  textContent = `
    <p>computer: ${compSelection}</p>
    <p>player: ${humanSelection}</p>
    <p>Winner: ${result}</p>
    <p>player Wins: ${playerscore}</p>
    <p>compouter Wins: ${compouterscore}</p>
    <p>Ties in Game: ${ties}</p>
  `;

  divresults.innerHTML = textContent;

  if( playerscore >= 5 || compouterscore >= 5) {
    const winText = (playerscore > compouterscore)?'End of game player won': 'End of game computer won';
    playerscore = 0;
    compouterscore = 0;
    ties = 0;
    alert(winText);
  }
};

const playRound = (computerSelection, playerSelection) => {
  let outcome;
  if (computerSelection === "paper" && playerSelection === "rock") {
    outcome = "computer";
  } else if (computerSelection === "paper" && playerSelection === "scissor") {
    outcome = "player";
  }
  else if (computerSelection === "rock" && playerSelection === "scissor") {
    outcome = "computer";
  } else if (computerSelection === "rock" && playerSelection === "paper") {
    outcome = "player";
  }
  else if (computerSelection === "scissor" && playerSelection === "paper") {
    outcome = "computer";
  } else if (computerSelection === "scissor" && playerSelection === "rock") {
    outcome = "player";
  }
  else {
    outcome ="tie"
  }

  updateUI(computerSelection, playerSelection, outcome);
  return outcome;
};

const game = (playerChoice) => {
const computerSelection = computerPlay();
const winner = playRound(computerSelection, playerChoice);
if (winner === "player") return "player won";
else if (winner === "computer") return "computer Won";
else return "Tie";
};