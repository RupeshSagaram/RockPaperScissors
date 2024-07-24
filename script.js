
let options = ['rock', 'paper', 'scissors'];

function getComputerOptions(){
 let randomOptions = options[(Math.floor(Math.random()*options.length))];
 return randomOptions;
}

function getHumanChoice(){
    choice = prompt("choose any one: rock, paper, scissors");

    if(choice == 'rock'){
       userChoice= 'rock';
        return userChoice;
    }
    else if(choice =='paper'){
        userChoice= 'paper';
        return userChoice;
    }
    else if(choice == 'scissors'){
        userChoice= 'scissors';
        return userChoice;
    }
    else{
        userChoice= prompt("choose any one: rock, paper, scissors");
        return userChoice;
    }   
}

let humanScore = 0;
let computerScore = 0;

function playGame(){

    for(let round = 1; round<6; round++){

function playRound(humanChoice,computerChoice){
humanChoice = humanChoice.toLowerCase();
computerChoice = computerChoice.toLowerCase();

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
console.log(`Round: ${round}`);

let humanChoice = getHumanChoice();
let computerChoice = getComputerOptions();

playRound(humanChoice,computerChoice);
}

if(humanScore>computerScore){
  console.log('Congratulations!! you won the game!');
}
else if(computerScore>humanScore){
    console.log('Gameover!!! better luck next time! :(')
}

// the following scores are working only when it is placed outside the loop.
console.log(`your score: ${humanScore}`);
console.log(`computer score: ${computerScore}`);

}

playGame();