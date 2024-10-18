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

function getHumanChoice(choice) {
	// While statement continues running until user input is valid and returns it as lowercase string
	
	while (true) {
		if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
			return choice;
		} else {
			alert(`That's not a valid option. Please choose rock, paper, or scissors.`);
			return 'ERROR';
		}
	}
}

function playRound(humanChoice, computerChoice) {
	let hc = humanChoice;
	let cc = computerChoice;
	
	switch (hc) {
		case cc:
			message.textContent = `It's a draw!`;
			break;
		case 'rock':
			if (cc === 'paper') {
				message.textContent = `You lose! Paper beats rock`;
				computerScore++;
				break;
			}
			message.textContent = `You win! Rock beats scissors`;
			humanScore++;
			break;
		case 'paper':
			if (cc === 'scissors') {
				message.textContent = `You lose! Scissors beat paper`;
				computerScore++;
				break;
			}
			message.textContent = `You win! Paper beats rock`;
			humanScore++;
			break;
		case 'scissors':
			if (cc === 'rock') {
				message.textContent = `You lose! Rock beats scissors`;
				computerScore++;
				break;
			}
			message.textContent = `You win! Scissors beats paper`;
			humanScore++;
			break;
		default:
			message.textContent = `There was an error`;
	}
	++rounds;

	if (rounds === 5) {
		message.textContent = (humanScore > computerScore)? 'Congratulations! You won the game! Make a choice to play again' : 'You lost :( Make a choice to play again';
		rounds = 0;
		humanScore = 0;
		computerScore = 0;
	}
}

function playGame() {
	start.remove();
	const choices = ['rock', 'paper', 'scissors'];

	for (let i = 0; i < choices.length; i++) {
		let button = document.createElement('button');
		button.classList = 'choice';
		button.id = choices[i];
		button.textContent = choices[i];
		button.style.marginRight = '10px';
		buttonList.appendChild(button);
	}

	document.querySelectorAll('.choice').forEach(item => item.addEventListener('click', event => playRound(getHumanChoice(event.target.id), getComputerChoice())));
}


let rounds = 0;
let humanScore = 0;
let computerScore = 0; 
let buttonList = document.querySelector('#buttons');
let start = document.querySelector('#game-start');
let message = document.querySelector('#message');

start.addEventListener('click', playGame);
