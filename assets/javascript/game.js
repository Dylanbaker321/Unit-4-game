console.log("Test");


$(document).ready(function() {

//This sets the goal number
var targetNumber = Math.floor(Math.random() * 120) + 20;
$("#pointTotal").text(targetNumber);
//Variables
var CryOne = Math.floor(Math.random()*11+1)
var CryTwo= Math.floor(Math.random()*11+1)
var CryThree= Math.floor(Math.random()*11+1)
var CryFour= Math.floor(Math.random()*11+1)

var userTotal= 0; 
var wins= 0;
var loses = 0;

// Shows the number of times you have won and lost
$("#wins").text("you have won " + wins + " Times");
$("#loses").text("you have lost " + loses + " Times");




});