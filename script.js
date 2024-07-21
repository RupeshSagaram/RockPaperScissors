

/* logic/psudocode to get computer's choice.

create a variable called options and store strings in array.
creating a function with name getComputerChoice.
create a variable called randomOptions
assign the arrey to the variable randomOptions.
the array should contain a math.random multiplied by array length and we should Math.floor the value.
console.log the randomOptions.
output that variable.
*/

let options = ['rock', 'paper', 'scissors'];

function getComputerOptions(){
 let randomOptions = options[(Math.floor(Math.random()*options.length))];
 return randomOptions;
}

/*

create a function called getHumanChoice
create a variable called choice and assign a prompt asking user for their choice.
create a conditional if statement to make sure other options entered by user are invalid.
output the choices in each condition.
*/

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
        userChoice= 'not valid';
        return userChoice;
    }   
}

/* creating global scope variable to keep track of scores and initializing it with zero*/
let humanScore = 0;
let computerScore = 0;

/*
 writing a logic to play a single round.
 create a function playRound.
 it takes two parameters: humanChoice and computerChoice
 create two variables in global scope called humanSelection and comSection and assign the getHumanChoice function and getComputerChoice function respectively.
 change human choices and computerChoices to case insensitive by using toLowerCase()
 in playRound function create a conditional statement between humanchoices and computerchoices.
 if both are strictly equal then its a draw
 if they are not equal then write condition explaing game logic
 increment the human or com variable based on the winner.
*/

function playRound(humanChoice,computerChoice){
humanChoice = humanChoice.toLowerCase();
computerChoice = computerChoice.toLowerCase();

if(humanChoice===computerChoice){
 console.log('it\'s a draw. no increase in points');
} 
else if(humanChoice=='rock' && computerChoice == 'scissors'){
console.log('you win, rock defeats scissors');
}
else if(humanChoice=='scissors' && computerChoice == 'paper'){
    console.log('you win, scissors defeats paper');   
}
else if(humanChoice=='paper' && computerChoice == 'rock'){
    console.log('you win, paper defats rock');
}
else {
    console.log(`you lose, ${computerChoice} defeats ${humanChoice}`);
}
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerOptions();

playRound(humanChoice,computerChoice);