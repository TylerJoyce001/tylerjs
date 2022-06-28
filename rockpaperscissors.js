const getUserChoice = (userInput) => {
    userInput.toLowerCase();
  
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error, please choose rock, paper, scissors, or bomb");
    }
  };
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  //console.log(getComputerChoice())
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
      return "User Won";
    }
    if (userChoice === computerChoice) {
      return "The game was a tie";
    }
  
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer Won";
      } else {
        return "User Won";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer Won";
      } else {
        return "User Won";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer Won";
      } else {
        return "User Won";
      }
    }
  };
  //console.log(determineWinner('paper', 'rock'));
  
  const playGame = () => {
    const userChoice = getUserChoice("paper");
    const computerChoice = getComputerChoice();
  
    console.log(userChoice);
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  