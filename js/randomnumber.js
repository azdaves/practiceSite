
// var lower = prompt('Input a number ');
// var upper = prompt('Input a higher number ');
function getRandomNumber ( lower, upper ) {
  return Math.floor(Math.random() * (upper - lower + 1 )) + lower;
  if (isNaN(lower) || isNaN(upper) {
    throw new Error(' Please input a number');
  }
             
}
document.write('<h1> Here is your random ' + getRandomNumber(lower, upper) + '</h1>');




// var input1 = prompt("Please type a starting number");
// var bottomNumber = parseInt(input1);
// var input = prompt("Please type a second number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor( Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
// document.write(message);