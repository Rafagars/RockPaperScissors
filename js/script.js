playerScore = 0;

computerScore = 0;

function computerPlay(){

	const choice = Math.floor(Math.random()*3);

	if(choice===0){
		return 'rock';
	}
	else if (choice===1) {
		return 'paper';
	}
	else if (choice===2) {
		return 'scissors';
	}
	else{
		return 'error';
	}

};

const computerSelection = computerPlay();

let playerSelection = '';

let result = document.querySelector('#result');

let btnRock = document.querySelector('#rock');

btnRock.addEventListener('click', () => {
	playerSelection = 'rock';

	const p = document.createElement('p');

	p.textContent = playRound(playerSelection, computerSelection);

	result.appendChild(p);

});

let btnPaper = document.querySelector('#paper');

btnPaper.addEventListener('click', () => {
	playerSelection = 'paper';

	const p = document.createElement('p');

	p.textContent = playRound(playerSelection, computerSelection);

	result.appendChild(p);
})

let btnScissors = document.querySelector('#scissors');

btnScissors.addEventListener('click', () => {
	playerSelection = 'scissors';

	const p = document.createElement('p');

	p.textContent = playRound(playerSelection, computerSelection);

	result.appendChild(p);

} ) 

function playRound(playerSelection, computerSelection) {
	// your code here!
	if (playerSelection === computerSelection) {
		return("It's a tie! Player choose: " + playerSelection + ' and Computer choose: ' + computerSelection);
	}
	else if ( (playerSelection === 'rock' && computerSelection === 'scissors') || 
		(playerSelection === 'paper' && computerSelection === 'rock') || 
		(playerSelection === 'scissors' && computerSelection === 'paper') ) {
		return('Player Win! ' + playerSelection + ' wins over ' + computerSelection);
	}
	else  {
		return('Computer Win! ' + playerSelection + ' loses over ' + computerSelection);
	} 
};


