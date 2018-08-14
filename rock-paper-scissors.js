let playScore = 0;
let compScore = 0;

function computerPlay() {
  let compOptions = ['rock', 'paper', 'scissors'];
  computerSelection = compOptions[Math.floor(Math.random()*compOptions.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {

  computerSelection = computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);

  if (playScore < 5 && compScore < 5) { 
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) { 
      playScore += 1;
      if (playScore == 5) {
        result = document.querySelector('#result');
        result.textContent = "Player Has Won!";
      }
    }
    else if (playerSelection == computerSelection) {
    }
    else {
      compScore += 1;
      if (compScore == 5) {
        result = document.querySelector('#result');
        result.textContent = "Computer Has Won!";
      } 
    }
  }
  else {
  }
  
  let playerScore = document.querySelector('#playerScore');
  playerScore.textContent = playScore;

  let computerScore = document.querySelector('#computerScore');
  computerScore.textContent = compScore;

}  

var rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playRound('rock');
});

var paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playRound('paper');
});

var scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playRound('scissors');
});
