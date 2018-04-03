/*
// inicjalizacja zmiennej
var name = prompt('Enter your name');
// alert('Hello, ' + name);

//komenda dla konsoli w devtools
console.log('Hello, ' + name);
*/
/*
var a = prompt("Enter base value");
var h = prompt("Enter height value");
var triangleArea = 0.5 * a * h;
alert("Triangle field with base a: " + a + " and height h: " + h + " is equal to: " + triangleArea);
console.log("Triangle field with base a: " + a + " and height h: " + h + " is equal to: " + triangleArea);
*/

var a = prompt("Enter first value");
var b = prompt("Enter second value");
var value = (Number(a) * Number(a)) - (2 * Number(a) * Number(b)) - (Number(b) * Number(b));
alert("The result is: " + value);
console.log("The result is: " + value);

if (value > 0) {
    console.log("Value " + value + " is a positive result");
} else if (value < 0) {
    console.log("Value " + value + " is a negative result");
} else {
    console.log("Value " + value + " is zero");
}

(value > 0) ? console.log("Value " + value + " is a positive result") : console.log("Value " + value + " is a negative result");