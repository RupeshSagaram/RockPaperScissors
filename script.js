let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');


let options = ['rock', 'paper', 'scissors'];

function getComputerOptions(){
 let randomOptions = options[(Math.floor(Math.random()*options.length))];
 return randomOptions;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){

let computerChoice = getComputerOptions();

if(humanChoice===computerChoice){
 console.log('it\'s a draw. no increase in points');

} 
else if(humanChoice=='rock' && computerChoice == 'scissors'){
console.log('you win, rock defeats scissors');
return ++humanScore;
}
else if(humanChoice=='scissors' && computerChoice == 'paper'){
    console.log('you win, scissors defeats paper'); 
    return ++humanScore;
}
else if(humanChoice=='paper' && computerChoice == 'rock'){
    console.log('you win, paper defeats rock');
    return ++humanScore;
}
else {
    console.log(`you lose, ${computerChoice} defeats ${humanChoice}`);
    return ++computerScore;
}
}

rockBtn.addEventListener('click',() => playRound('rock'));
paperBtn.addEventListener('click',() => playRound('paper'));
scissorsBtn.addEventListener('click',() => playRound('scissors'));

// the following scores are working only when it is placed outside the loop.
console.log(`your score: ${humanScore}`);
console.log(`computer score: ${computerScore}`);