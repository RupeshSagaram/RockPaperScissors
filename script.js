

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


