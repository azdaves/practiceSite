console.log("Start program");

var VisitorName = prompt("What is your name?");
var message = "Hi ";

var questionsCorrect = 0;
alert( message + VisitorName +" You currently have " + questionsCorrect + " questions correct.");

var answer1 = prompt("What is the capital of Arizona?");
if ( answer1.toUpperCase() === "PHOENIX" ) {
    questionsCorrect +=1;
  } else {
   questionsCorrect +=0; 
  }
alert( message + VisitorName +" You currently have " + questionsCorrect + " questions correct.");

var answer2 = prompt("What is the capital of California?");
if ( answer2.toUpperCase() === "SACRAMENTO" ) {
    questionsCorrect +=1;
  } else {
   questionsCorrect +=0; 
  }
alert( message + VisitorName +" You currently have " + questionsCorrect + " questions correct.");

var answer3 = prompt("What is the captial of Minnesota?");
if ( answer3.toUpperCase() === "ST PAUL" ) {
    questionsCorrect +=1;
  } else {
   questionsCorrect +=0; 
  }
alert( message + VisitorName +" You currently have " + questionsCorrect + " questions correct.");

var answer4 = prompt("What is the capital of Washington (the state)?");
if ( answer4.toUpperCase() === "OLYMPIA" ) {
    questionsCorrect +=1;
  } else {
   questionsCorrect +=0; 
  }
alert( message + VisitorName +" You currently have " + questionsCorrect + " questions correct.");

var answer5 = prompt("Is this quiz written in Javascript?");
if ( answer5.toUpperCase() === "YES" ) {
    questionsCorrect +=1;
  } else {
   questionsCorrect +=0; 
  }
alert( message + VisitorName +" You currently have " + questionsCorrect + " questions correct.");

if ( parseInt(questionsCorrect) === 5)  {
	document.write("You receive a GOLD STAR!!!");
}

	else if (parseInt(questionsCorrect) > 3 || questionsCorrect < 5)  {
   	document.write("You receive a high five!!!");
  } 

	else if (parseInt(questionsCorrect) > 0 || questionsCorrect < 3)  {
   	document.write("You receive a fist bump!!!");
  } 	else {
    document.write("Sorry. You receive nothing.");
}



document.write("<h1>Congratulations you answered " + questionsCorrect + " questions correct.");

console.log("End program");                   
                   //






