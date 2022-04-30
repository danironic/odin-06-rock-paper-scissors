function computerPlay() {
  const MAX_CHOICES = 3;
  let choice = Math.floor(Math.random() * MAX_CHOICES);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper covers rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock smashes scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper covers rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors cuts paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock smashes scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors cuts paper.";
  } else {
    return "Tie! You both chose " + playerSelection + ". No one wins.";
  }
}

console.log(playRound("rock", computerPlay()));
console.log(playRound("paper", computerPlay()));
console.log(playRound("scissors", computerPlay()));
