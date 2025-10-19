function playGame(userChoice) {
  // Show user choice
  const randomNo = Math.random() * 3;
  let computerChoice = '';

  if (randomNo <= 1) {
    computerChoice = 'bat';
  } else if (randomNo <= 2) {
    computerChoice = 'ball';
  } else {
    computerChoice = 'stump';
  }
  let result = '';
  if (userChoice === computerChoice) {
    result = "You win the match";
  } else {
    result = "You lost!";
  }
  // Show final result
  alert(`Your choice is: ${userChoice}. Computer choice is: ${computerChoice} . ${result}`);
}
