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
printToScreen.innerHTML = cars.join(' <br/>')
//printToScreen.innerHTML = cars.reverse().join(' <br/>');
var countries = ['sweden','norway','finland','denmark','island'];
countries.forEach(function(country) {
    printToScreen.innerHTML += country + ' ';
});
printToScreen.innerHTML = "";
var planets = ["earth", "mars", "saturnus", "jupiter"];
planets.forEach(function(planets) {
    printToScreen.innerHTML += planets + ' - ';
    
});
printToScreen.innerHTML = "";
var number = [1, 32, 44 ,112 ,3 ,5 ,6,9,12];
var color = ["red", "green", "blue", "yellow"];

/*number.forEach(function(num) {
    if(num % 3 === 0){
        printToScreen.innerHTML += num + ' ';
    }
});
*/
for (var i = 0; number.length > i; i++) {
    if (number[i] % 3 === 0) {
        printToScreen.innerHTML += number[i] + ' ';
    }
};
printToScreen.innerHTML = "";
var k =[1,2,3,4,5,6,7];
var ny = [];
k.forEach(function(k){
    ny.unshift(k);
});
printToScreen.innerHTML = ny;
function isIdentical(arr1, arr2) {
    if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
        printToScreen.innerHTML = true;
    } else {
        printToScreen.innerHTML = false;
    }
};
isIdentical([2,3,4], [2,3,4]);
var sum = 0;
k.forEach(function(item) {
    sum += item;
})
printToScreen.innerHTML = sum;

var max = 0;
number.forEach(function(item) {
    if (item > max) {
        max = item;
    }
})
printToScreen.innerHTML = max;