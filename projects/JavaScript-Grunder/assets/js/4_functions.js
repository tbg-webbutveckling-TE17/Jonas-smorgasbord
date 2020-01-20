
/*function twinkleTwinkle() {
    console.log("Blinka lilla stjärna där!");
    console.log("hur jag undrar var du är..");
}
/*
// twinkleTwinkle();
//deklarera funktionen med 2 parametrar
function multiply(num1, num2) {
    console.log(num1 * num2)
}
// kalla funktionen med 2 argument
//multiply(5, 6);

function sayHello(theName) {
    console.log("Hello, " + theName);
}

//sayHello("Jens");

function getArea (width, height) {
    console.log("The area of: " + width + " and " + height + " is " + width * height);
}

// getArea(5, 7.6);

function toSquare(x) {
    return x * x;
}

// returnerar ett värde
//console.log("4 squared is: " + toSquare(4));

//var result = toSquare(5);
//console.log(result);

function quadruoleMe(x) {
    return 4 * x;
}
var myFavNumber = quadruoleMe(2);
//console.log(myFavNumber);

function isEven(x) {
    if (x % 2 == 0) {
        return true;
    } 
    else {
        return false
    }
}
console.log
(isEven(2));
*/
/*
function sing() {
    console.log('hej');
}
setInterval(sing, 2000);
clearInterval(1);
setInterval(sing, 2000);    
clearInterval(2);

var IntervalExample = setInterval(sing, 2000);
clearInterval(IntervalExample);

var anon = setInterval(function() {
    console.log('Im an anonomous function');
}, 1500);

clearInterval(anon);

function myTimer() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementById('timeOutput').innerHTML = time;
}

myTimer();

var myTime= setInterval(myTimer, 1000);

var stopBtn = document.getElementsByTagName('button')[0];
stopBtn.addEventListener('mouseenter', function() {
    clearInterval(myTime);
});

stopBtn.addEventListener('mouseleave', function() {
    myTime = setInterval(myTimer, 1000);
    
});

// Calculate tip
/*
function calculateTip(total) {
    var tipPercent = 0.15;
    return total * tipPercent;
}

var billTotal = prompt("Quanto Costa?");
var billTip = calculateTip(billTotal);
var receipt = "Bill total: " + billTotal + " Tip: " + billTip;
console.log(receipt);
*/
/*
function tellFortune(nrChildren, partnerFirst, partnerSurr, location, job) {
    
    /*document.getElementsByTagName('p')[nr].innerHTML = "You will be a " + job + " in " + location + " and married to " + partnerFirst +" "+ partnerSurr + " with " + nrChildren + " kids.";
    */
/*    var para = document.createElement("p");
    var node = document.createTextNode( "You will be a " + job + " in " + location + " and married to " + partnerFirst +" "+ partnerSurr + " with " + nrChildren + " kids.");
    para.appendChild(node);
    var element = document.getElementsByTagName("div")[0];
    element.appendChild(para);

};
var nr = 1;
var partnersFirst = ["Amanda", "Susan", "Maria", "Anna"];
var partnersSurr = ["Jonsson", "Gustavsson", "Bäckman", "Andersson"];
var locations = ["Lycksele", "L.A.", "Kroksjö", "Kiev"];
var jobs = ["Engineer", "Cleaner", "Teacher", "Electrician"];

var colors = ["blue", "grey", "cyan", "black", "pink"];
var fortuneBtn = document.getElementsByTagName('button')[1];
fortuneBtn.addEventListener('mousedown', function() {
    nr += 1;
    document.getElementsByTagName("p")[nr].style.color = colors[Math.floor(Math.random() * 5)];
    tellFortune(Math.floor(Math.random() * 4), partnersFirst[Math.floor(Math.random() * partnersFirst.length)], partnersSurr[Math.floor(Math.random() * partnersSurr.length)],locations[Math.floor(Math.random() * locations.length)], jobs[Math.floor(Math.random() * jobs.length)]);
});
-------------------------- */
/*
function tellFortune(nrChildren, partnerFirst, partnerSurr, location, job) {
    document.getElementsByTagName('p')[newPara].innerHTML += "You will be a " + job + " in " + location + " and married to " + partnerFirst +" "+ partnerSurr + " with " + nrChildren + " kids.";
    
};
function newParagraph(){
    newPara += 1;
    var paraCreate = document.createElement("p");
    var paraText = document.createTextNode(tellFortune(Math.floor(Math.random() * 4), partnersFirst[Math.floor(Math.random() * partnersFirst.length)], partnersSurr[Math.floor(Math.random() * partnersSurr.length)],locations[Math.floor(Math.random() * locations.length)], jobs[Math.floor(Math.random() * jobs.length)]));
    paraCreate.appendChild(paraText)
    var para = document.getElementsByClassName("fortunePara");
    para.appendChild(paraCreate)
    document.getElementsByTagName('p')[newPara].style.color = colors[Math.floor(Math.random() * 5)];

}
var partnersFirst = ["Amanda", "Susan", "Maria", "Anna"];
var partnersSurr = ["Jonsson", "Gustavsson", "Bäckman", "Andersson"];
var locations = ["Lycksele", "L.A.", "Kroksjö", "Kiev"];
var jobs = ["Engineer", "Cleaner", "Teacher", "Electrician"];
var colors = ["blue", "grey", "yellow", "azure", "black"]
var newPara = 0;
var fortuneBtn = document.getElementsByTagName('button')[1];
fortuneBtn.addEventListener('mousedown', function() {
    newParagraph();
    tellFortune(Math.floor(Math.random() * 4), partnersFirst[Math.floor(Math.random() * partnersFirst.length)], partnersSurr[Math.floor(Math.random() * partnersSurr.length)],locations[Math.floor(Math.random() * locations.length)], jobs[Math.floor(Math.random() * jobs.length)]);
});

*/
/*
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
input = document.querySelector('input');
pressed = document.getElementById('pressedKeys');
input.onkeypress = hangman;
var correctGuess = [" _ "," _ "," _ "," _ "];
var word = ["g", "o", "a", "t"];
var wins = 0;
var lost = 0;
var guessesLeft = 10;
var correctLetters = 0;
var balance = 0;
var matchHistory = [];
var displayMatchHistory = [];
var multiplier = 1;

function hangman() {
    document.getElementById('inputBox').value= '';
    var guess = 0;
    guess = event.key;
    pressed.textContent += guess;
    guessesLeft -= 1;

    for (var i = 0; i < word.length ; i++) {
        if (guess == word[i] && guess !== correctGuess[i]) {
            correctGuess[i] = guess;
            correctLetters += 1;
            if (correctLetters == word.length) {
                wins += 1;
                streak(true);
                flash('green');
                displayMatchHistory += '✔️ ';
                balance += 30 * multiplier;
                reset();
            }
        } else {
            if (guessesLeft < 1) {
                lost += 1;
                flash('red');
                streak(false);
                displayMatchHistory += '❌ ';
                balance -= 30;
                reset();
            }
        }
    refresh();
}
};
function reset() {
    guessesLeft = 10;
    correctLetters = 0;
    correctGuess = [" _ "," _ "," _ "," _ "];
    pressed.textContent = "";
    message = "";
}
function streak(bool) { // lägga till 
    matchHistory.push(bool);
    
    if (bool == true && matchHistory[wins+lost-1] == matchHistory[wins+lost-2]) {
        multiplier += 0.5;
    } else {
        multiplier = 1;
    }
}
function flash(flashColor) {
    document.getElementById('flash').style.background = flashColor;
    setTimeout(function(){
        document.getElementById('flash').style.background= "linear-gradient(to right, #00caf3, #000000)";
    }, 300);
}

function refresh() {
    document.getElementById('balance').innerHTML = "Balance: " + balance + "$";
    document.getElementById('streaks').innerHTML = "Match History: " + displayMatchHistory;
    document.getElementById('word').innerHTML = correctGuess.join(' ');
    document.getElementById('wins').innerHTML = "Wins: "+ wins;
    document.getElementById('lost').innerHTML = "Lost: "+ lost;
    document.getElementById('guesses').innerHTML = "Guesses left: "+ guessesLeft;
    
    
}


/*
input = document.querySelector('input');
pressed = document.getElementById('pressed');
input.onkeypress = hangman;

function hangman() {
    var word = ["g", "o", "a", "t"];
    var correctGuess = ""
    guess = event.key;
    pressed.textContent += guess;
    for (var i = 0; i < word.length ; i++) {
        if (guess == word[i]) {
            if (correctGuess.indexOf(guess) > -1) {
                guess += correctGuess;
                alert('jo');
                
            }
            else {
                alert('niet');
            }
        }
        else {
            alert('nej');
        }
    }
    document.getElementById('word').innerHTML += correctGuess;
};
*/

input = document.querySelector('input');
pressed = document.getElementById('pressedKeys');
input.onkeypress = hangman;
var correctGuess = [" _ "," _ "," _ "," _ "];
var word = ["g", "o", "a", "t"];
var wins = 0;
var lost = 0;
var guessesLeft = 10;
var balance = 0;
var matchHistory = [];
var displayMatchHistory = [];

function hangman() {
    document.getElementById('inputBox').value= '';
    var guess = event.key;
    pressed.textContent += guess;
    guessesLeft -= 1;
    
    if (word.indexOf(guess) !== -1) {
        correctGuess[word.indexOf(guess)] = guess;
        }
        if (JSON.stringify(correctGuess) == JSON.stringify(word)) {
            wins += 1;
            streak(true);
        } 
    else {
        if (guessesLeft < 1) {
            lost +=1;
            streak(false);
        }
    }
    refresh();
}

function reset() {
    guessesLeft = 10;
    correctLetters = 0;
    correctGuess = [" _ "," _ "," _ "," _ "];
    pressed.textContent = "";
}
function streak(bool) { // lägga till 
    matchHistory.push(bool);
    if (bool == true) {
        if (matchHistory[wins+lost-1] == matchHistory[wins+lost-2]) {
            balance += 30 * 1.5;
        }else {
            balance += 30;
        }
        flash('green');
        displayMatchHistory += '✔️ ';
    } else {
        displayMatchHistory += '❌ ';
        balance -= 30;
        flash('red');
    }
    reset();
}
function flash(flashColor) {
    document.getElementById('flash').style.background = flashColor;
    setTimeout(function(){
        document.getElementById('flash').style.background= "linear-gradient(to right, #00caf3, #000000)";
    }, 300);
}

function refresh() {
    document.getElementById('balance').innerHTML = "Balance: " + balance + "$";
    document.getElementById('streaks').innerHTML = "Match History: " + displayMatchHistory;
    document.getElementById('word').innerHTML = correctGuess.join(' ');
    document.getElementById('wins').innerHTML = "Wins: "+ wins;
    document.getElementById('lost').innerHTML = "Lost: "+ lost;
    document.getElementById('guesses').innerHTML = "Guesses left: "+ guessesLeft;
    
    
}