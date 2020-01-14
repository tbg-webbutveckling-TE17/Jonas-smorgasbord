var friend1 = 'Måns';
var friend2 = 'Sten';
var friend3 = 'Claerence';
var friend4 = 'Mona';

//array in global scope
var friends = ["Måns"," Sten", "Claerence", "mona"];
var printToScreen = document.getElementById('testArray');
printToScreen.innerHTML = friends[2];

function newName(index, name) {
    friends[index] = name;
}

//create an array in different way
var colors = []; //standard
var colors = new Array(); // not that common
var randomArray = ["hej", 21, false, true, {} ];
printToScreen.innerHTML = randomArray.length;

//array built-in methods
colors = ["red","green","blue"];

// describe the result string of an array
printToScreen.innerHTML = colors.join(' <br /> ');

// pop() - remove an item at the end of an array
colors.pop();
printToScreen.innerHTML = colors.join(' <br /> ');

//push() add item at hte end
colors.push('purple');
printToScreen.innerHTML = colors.join(' <br /> ');
//unshift() add item beginning
colors.unshift('yellow');
printToScreen.innerHTML = colors.join(' <br /> ');
//shift() remove item at the beginning
colors.shift();
printToScreen.innerHTML = colors.join(' <br /> ')
//slice() copy parts of an array
var colorGreen = colors.slice(1,2);
printToScreen.innerHTML = colorGreen.join(' <br /> ')

var colorsCopy = colors.slice(colors);
printToScreen.innerHTML = colorsCopy.join(' <br /> ')

//indexOf find the idex of an item in the array
printToScreen.innerHTML = colors.indexOf('green');

var cars= ['a6', '940', 'mondeo','ferrari','landa','lada','citroen'];
//for (var i = 0; i < cars.length; i++) {
//    printToScreen.innerHTML += cars[i];
//}

//printToScreen.innerHTML = cars.reverse().join(' <br/>');
var countries = ['sweden','norway','finland','denmark','island'];
countries.forEach(function(country) {
    printToScreen.innerHTML += country + ' ';
});