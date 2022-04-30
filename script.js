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
