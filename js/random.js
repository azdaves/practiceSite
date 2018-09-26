var input1 = prompt("Please type a starting number");
var bottomNumber = parseInt(input1);
var input = prompt("Please type a second number");
var topNumber = parseInt(input);
var randomNumber = Math.floor( Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
// if (isNaN(lower) || isNaN(upper) {
//     throw new Error(' Please input a number');
document.write(message);
