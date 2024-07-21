

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

getHumanChoice();