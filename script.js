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
  if (
    playerSelection === "rock" ||
    playerSelection === "paper" ||
    playerSelection === "scissors"
  ) {
    if (playerSelection === "rock" && computerSelection === "paper") {
      return "You lose! Paper covers rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock smashes scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper covers rock.";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      return "You lose! Scissors cuts paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You lose! Rock smashes scissors.";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      return "You win! Scissors cuts paper.";
    } else {
      return "Tie! You both chose " + playerSelection + ".";
    }
  } else {
    return 0;
  }
}

function game() {
  console.log("***ROCK___PAPER___SCISSORS***");
  console.log("First to 5 wins.");
  let choice;
  let result;
  let win = 0;
  let tie = 0;
  let lose = 0;
  for (let i = 0; i < 5; i++) {
    choice = prompt("Enter your choice: ", "");
    result = playRound(choice, computerPlay());
    if (result === 0) {
      console.log("Not a valid choice. Try again.");
      i -= 1;
    } else {
      if (result.search(/win/i) != -1) {
        win += 1;
      }
      if (result.search(/tie/i) != -1) {
        tie += 1;
      }
      if (result.search(/lose/i) != -1) {
        lose += 1;
      }
      console.log(result);
    }
  }
  if (win >= 3 || (tie > lose && win > lose)) {
    console.log(`You win! ${win} wins | ${lose} losses | ${tie} ties`);
  } else {
    console.log(`You lose! ${win} wins | ${lose} losses | ${tie} ties`);
  }
}

game();
