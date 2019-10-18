
function twinkleTwinkle() {
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
console.log(isEven(2));