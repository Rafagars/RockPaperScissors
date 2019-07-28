//Score div

playerScore = 0;

computerScore = 0;

let score = document.querySelector('#score');

const spanPlayer = document.createElement('span');

spanPlayer.innerHTML = "<strong> Player Score: " + playerScore + "</strong>";

score.appendChild(spanPlayer);

const spanComputer = document.createElement('span');

spanComputer.innerHTML = " <strong> Computer Score: " + computerScore + "</strong>";

score.appendChild(spanComputer);

function updateScore(){

	spanPlayer.innerHTML = "<strong> Player Score: " + playerScore + "</strong>";

	spanComputer.innerHTML = " <strong> Computer Score: " + computerScore + "</strong>";

}
/////////////////////////////////////////////////////////////////////////////


//Result div

let playerSelection = '';

let result = document.querySelector('#result');

const p = document.createElement('p');

result.appendChild(p);

const winner = document.createElement('h3');

result.appendChild(Winner)
////////////////////////////////////////////////////////////////////////////

//Game Logic

function computerPlay(){

	const choice = Math.floor(Math.random()*3);

	if(choice===0){
		return 'rock';
	}
	else if (choice===1){
		return 'paper';
	}
	else if (choice===2){
		return 'scissors';
	}
	else{
		return 'error';
	}

};


let btnRock = document.querySelector('#rock');

btnRock.addEventListener('click', () => {

	playerSelection = 'rock';

	p.textContent = playRound(playerSelection, computerPlay());

	checkForWinner();

});

let btnPaper = document.querySelector('#paper');

btnPaper.addEventListener('click', () => {

	playerSelection = 'paper';

	p.textContent = playRound(playerSelection, computerPlay());

	checkForWinner();
})

let btnScissors = document.querySelector('#scissors');

btnScissors.addEventListener('click', () => {

	playerSelection = 'scissors';

	p.textContent = playRound(playerSelection, computerPlay());

	checkForWinner();

}); 

function playRound(playerSelection, computerSelection){
	
	if (playerSelection === computerSelection){
		return("It's a tie! Player choose: " + playerSelection + ' and Computer choose: ' + computerSelection);
	}
	else if ( (playerSelection === 'rock' && computerSelection === 'scissors') || 
		(playerSelection === 'paper' && computerSelection === 'rock') || 
		(playerSelection === 'scissors' && computerSelection === 'paper') ) {

		playerScore++;

		return('Player wins this round! ' + playerSelection + ' wins over ' + computerSelection);
	}
	else  {

		computerScore++;

		return('Computer wins this round ' + playerSelection + ' loses over ' + computerSelection);
	}
};

function checkForWinner(){

	if (playerScore >= 5){

	 	winner.textContent = "Player Wins!";

	 	//Restart score
	 	playerScore = 0;
	 	computerScore = 0;
	 } 
	 else if (computerScore >= 5){

	 	winner.textContent = "Computer Wins!"

	 	//Restart score
	 	computerScore = 0;
	 	playerScore = 0;
	 }
	 else{
	 	winner.textContent = " ";
	 }
};
