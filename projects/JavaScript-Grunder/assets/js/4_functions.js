
/*function twinkleTwinkle() {
    console.log("Blinka lilla stjärna där!");
    console.log("hur jag undrar var du är..");
}

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
function tellFortune(nrChildren, partnerFirst, partnerSurr, location, job) {
    document.getElementById('fortune').innerHTML += "You will be a " + job + " in " + location + " and married to " + partnerFirst +" "+ partnerSurr + " with " + nrChildren + " kids. <br/>";
};

var partnersFirst = ["Amanda", "Susan", "Maria", "Anna"];
var partnersSurr = ["Jonsson", "Gustavsson", "Bäckman", "Andersson"];
var locations = ["Lycksele", "L.A.", "Kroksjö", "Kiev"];
var jobs = ["Engineer", "Cleaner", "Teacher", "Electrician"];

var colors = ["blue", "grey", "",]
var fortuneBtn = document.getElementsByTagName('button')[1];
fortuneBtn.addEventListener('mousedown', function() {
    document.getElementById("fortune").style.color = "magenta";
    tellFortune(Math.floor(Math.random() * 4), partnersFirst[Math.floor(Math.random() * partnersFirst.length)], partnersSurr[Math.floor(Math.random() * partnersSurr.length)],locations[Math.floor(Math.random() * locations.length)], jobs[Math.floor(Math.random() * jobs.length)]);
});
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