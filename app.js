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
