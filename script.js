function computerPlay() {
  const MAX_CHOICES = 3;
  let choice = Math.floor(Math.random() * MAX_CHOICES);
  // Check if valid choice is given
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
  // If a valid selection, determine results.
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
    // Otherwise return 0 to show it was not a valid choice.
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
    // Call function to determine result of round
    result = playRound(choice, computerPlay());
    // If result isn't valid, set loop back one iteration to allow for a valid value.
    if (result === 0) {
      console.log("Not a valid choice. Try again.");
      i -= 1;
      // Otherwise, search result to see if user won, tied or lost.
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
  // This checks if you have more wins than losses
  if (win > lose) {
    console.log(
      `~~You won the game! (>^_^)> | ${win} wins | ${lose} losses | ${tie} ties |~~`
    );
  } else if (win === lose) {
    console.log(
      `~~You tied the game! | ${win} wins | ${lose} losses | ${tie} ties |~~`
    );
  } else {
    console.log(
      `~~You lost the game! | ${win} wins | ${lose} losses | ${tie} ties |~~`
    );
  }
}

game();
