var age = prompt("How old are you? ");

var date = new Date();
var year = date.getFullYear();
var birth = year - age;

document.write(birth);
