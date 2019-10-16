/*
---------------
|   if/else   |
---------------
*/

if (myAge < 18) {
// alert("Sad")
} else {
// alert("Gz")
}

if (myName == "Jonas") {
alert("Welcome, " + myName);
} else {
alert("You are not welcome here!")
}
// == equals to, === equals to and same datatype
if (myAge == "18") { 
//alert("Välkommen.");
} else {
//alert("Icket välkommen.");
}

var hasWatched = false; // add to watchlist

if (isEvil == true) {
// alert("Du är ond.");
} else {
//alert("Du är god.");
}

/*
******************
|  Guessing app  |
******************
*/

var secretNumber = 7;
var userInput = Number(prompt("Guess a number between 0 - 10"));
if (userInput === secretNumber) {
document.writeln("Grattis! du har gissat rätt! <br>");
}
else if (userInput === 6 || userInput == 8) {
alert("Det bränns!");
}
else if (userInput < secretNumber) {
alert("Du gissar för lågt");
}
else if (userInput > secretNumber) {
alert("Du gissar för högt");
}

