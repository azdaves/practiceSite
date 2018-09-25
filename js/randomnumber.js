function getRandomNumber ( lower, upper ) {
  return Math.floor(Math.random() * (upper - lower + 1 )) + lower; 
             
}
document.write('<h1> Here is a random ' + getRandomNumber (1, 10) + '</h1>');
document.write('<h1> Here is a random ' + getRandomNumber (100, 1000) + '</h1>');                              
document.write('<h1> Here is a random ' + getRandomNumber (5, 50) + '</h1>');
document.write('<h1> Here is a random ' + getRandomNumber (1000, 10000) + '</h1>');