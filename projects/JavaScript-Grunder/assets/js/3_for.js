var choices = ["Nudlar", "Pankaka", "Palt","Tacos", "Köttbullar", "Pizza"];

/*  for (var i = 0; i < choices.length; i++) {
    document.writeln('My nr ' + (i + 1) + '     favorite food is ' + choices[i]);
    document.writeln('<br/>');
}


for (var i = 0; i < choices.length; i++) {
    if ((i+1) == 1) {
        var ordinal = "st ";
    } else if ((i+1) == 2) {
        var ordinal = "nd ";
    } else if ((i+1)== 3) {
        var ordinal = "rd ";
    } else {
        var ordinal = "th ";
    }
    document.writeln('My '+ (i + 1) + ordinal + ' favorite food is ' + choices[i]);
    document.writeln('<br/>');

*/
for (var i = 10; i >= 0 ; i--) {
    for(var ii = 0; ii <= i; ii++) {
        document.writeln("* ");
    }
    document.writeln('<br/>');
}
/*
for (var i = 0; i <= 10 ; i++) {
    var space = [" ", " ", " ", " ", " ", " ", " ", " ", ]
    for(var ii = 10; ii >= i; ii--) {
        document.writeln(space.slice(ii) + " *");
    }
    document.writeln('<br/>');
}
*/
for (var i = 0; i <= 100 ; i++) {
    for(var iii = 100; iii >= i; iii--) {
        document.writeln("\xa0");
    }
    for(var ii = 0; ii <= i; ii++) {
        document.writeln("\xa0*\xa0");
    }
    document.writeln('<br/>');
}