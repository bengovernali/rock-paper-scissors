//Function for computer to randomly select 'rock', 'paper', or 'scissors'

function computerPlay() {
  let compOptions = ['rock', 'paper', 'scissors'];
  computerSelection = compOptions[Math.floor(Math.random()*compOptions.length)];
  return computerSelection;
}
  
//Function for actual play of game. Takes computer's choice and user's choice, then outputs a win or loss

function playRound(playerSelection, computerSelection) {
    
  //computerPlay(); //call computerPlay to get a choice from the computer

  //playerSelection = prompt('Select rock, paper, or scissors', ' ');   //Player makes a choice
  //playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
  playerScore = 0
  computerScore = 0

  if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) { 
    playScore = document.querySelector('#playScore');
    playScore += 1;
    console.log(playScore);
  }
  else if (playerSelection == computerSelection) {
  }
  else {
    compScore = document.querySelector('#compScore');
    compScore += 1;
    console.log(compScore);
  }
}  

/*function playGame() {
  let playerScore = 0;    //Player Score
  let computerScore = 0;    //Computer Score
  let i = 0;

  while (i < 5) {
    computerPlay();
    playRound();

    if (results == "win") {
      playerScore++;
    } 
      else if (results == "loss") {
        computerScore++;
      }
      else {
      }
    i++;
  }
  if (playerScore > computerScore) {
    return "Victory!";
  } 
    else if (playerScore == computerScore) {
      return "Defeat!";  
    }
    else {
      return "Draw!";
    }
}  */

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
