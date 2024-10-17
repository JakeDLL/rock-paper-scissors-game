//Declare function to return computer choice. Returns string ('rock', 'paper', 'scissors')

function getComputerChoice() {
	//store random number as choice
	let randNum = Math.floor(Math.random() * 3) + 1;

	// returns corresponding choice as string
	switch (randNum) {
		case 1:
			return 'rock';
			break;
		case 2:
			return 'paper';
			break;
		case 3:
			return 'scissors';
			break;
		default:
			return randNum;
	}
}

/***
 * PSEUDOCODE FOR HUMAN CHOICE
 *
 * Declare function named getHumanChoice that will return one of the valid choices
 * 	create var to store humanChoice from a prompt
 * 	check to see if input is valid
 * 	return input as lowercase to be checked against computerchoice
 * 	if not valid, prompt again
***/

// Declares function to check and return user input
function getHumanChoice() {
	// Gets user input and converts it to lowercase
	let choice = prompt(`Make a choice. Rock, paper, or scissors?`).toLowerCase();

	// While statement continues running until user input is valid and returns it as lowercase string
	while (true) {
		if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
			return choice;
		} else {
			choice = prompt(`That's not a valid option. Please choose rock, paper, or scissors.`);
		}
	}
}


function playGame() {
	function playRound(humanChoice, computerChoice) {
		let hc = humanChoice;
		let cc = computerChoice;
		
		switch (hc) {
			case cc:
				console.log(`It's a draw!`);
				break;
			case 'rock':
				if (cc === 'paper') {
					console.log(`You lose! Paper beats rock`);
					computerScore++;
					break;
				}
				console.log(`You win! Rock beats scissors`);
				humanScore++;
				break;
			case 'paper':
				if (cc === 'scissors') {
					console.log(`You lose! Scissors beat paper`);
					computerScore++;
					break;
				}
				console.log(`You win! Paper beats rock`);
				humanScore++;
				break;
			case 'scissors':
				if (cc === 'rock') {
					console.log(`You lose! Rock beats scissors`);
					computerScore++;
					break;
				}
				console.log(`You win! Scissors beats paper`);
				humanScore++;
				break;
			default:
				console.log(`There was an error`);
		}
	}

	let humanScore = 0;
	let computerScore = 0; 

	const message = (humanScore > computerScore)? `Congratulations! You won!` : `You lost`;
	console.log(`User ${humanScore}. PC ${computerScore}. ${message}`);
	alert(message);
}

playGame();
