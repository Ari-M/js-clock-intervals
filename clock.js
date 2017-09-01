//Change CSS values in JavaScript by getting reference 
//to them through the DOM and setting a new value to 
//their CSS properties:
document.addEventListener('DOMContentLoaded', function(){
var redHand = document.getElementById('second');
var longHand = document.getElementById('minute');
var shortHand = document.getElementById("hour");
var degrees = 0;
var degrees1 = 0;
var degrees2 = 0;

var secHand = setInterval(function(){
	degrees = degrees + 6;
	redHand.style.transform = "rotate(" + degrees + "deg)";
}, 1000);

var minHand = setInterval(function(){
	degrees1 = degrees1 + 6
	longHand.style.transform = "rotate(" + degrees1 + "deg)";
}, 60000);

var hourHand = setInterval(function(){
	degrees2 = degrees2 + 6;
	shortHand.style.transform = "rotate(" + degrees2 + "deg)";
}, 3600000)
});