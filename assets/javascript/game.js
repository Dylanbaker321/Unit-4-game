console.log("Test");


$(document).ready(function () {

    //This sets the goal number
    var targetNumber = Math.floor(Math.random() * 120) + 20;
    $("#pointTotal").text(targetNumber);
    //Variables
    var CryOne = Math.floor(Math.random() * 11 + 1)
    var CryTwo = Math.floor(Math.random() * 11 + 1)
    var CryThree = Math.floor(Math.random() * 11 + 1)
    var CryFour = Math.floor(Math.random() * 11 + 1)

    var userTotal = 0;
    var wins = 0;
    var loses = 0;

    // Shows the number of times you have won and lost
    $("#wins").text("you have won " + wins + " Times");
    $("#loses").text("you have lost " + loses + " Times");

    //Functions for updating page when you win

    function winner() {
        wins++;
        $("#wins").text("you have won " + wins + " Times");
        alert("Winner")

        //calls reset function 
        tryAgain()
    };

    // Function for updating page when you Lose
    function loser() {
        loses++;
        $("#loses").text("you have lost " + loses + " Times");
        alert("Loser");
        //calls reset function 
        tryAgain()

    }

    //Jewl Click programs
    $("#crystalOne").on('click', function () {
        userTotal = userTotal + CryOne;
        $("#score").text("Yout Current Score is  " + userTotal);
        if (userTotal == targetNumber) {
            winner();
        }
        else if (userTotal > targetNumber) {
            loser();
        }
        console.log(CryOne);
    });
    $("#crystalTwo").on('click', function () {
        userTotal = userTotal + CryTwo;
        $("#score").text("Yout Current Score is  " + userTotal);
        if (userTotal == targetNumber) {
            winner();
        }
        else if (userTotal > targetNumber) {
            loser();
        }
        console.log(CryTwo);
    });

    $("#crystalThree").on('click', function () {
        userTotal = userTotal + CryThree;
        $("#score").text("Yout Current Score is  " + userTotal);
        if (userTotal == targetNumber) {
            winner();
        }
        else if (userTotal > targetNumber) {
            loser();
        }
        console.log(CryThree);
    });

    $("#crystalFour").on("click", function () {
        userTotal = userTotal + CryFour;
        $("#score").text("Yout Current Score is  " + userTotal);
        if (userTotal == targetNumber) {
            winner();
        }
        else if (userTotal > targetNumber) {
            loser();
        }
        console.log(CryFour);
    });
    // Function For resseting the Game after win or loss

    function tryAgain() {
        targetNumber = Math.floor(Math.random() * 120) + 20;
        $("#pointTotal").text(targetNumber);
        CryOne = Math.floor(Math.random() * 11 + 1);
        CryTwo = Math.floor(Math.random() * 11 + 1);
        CryThree = Math.floor(Math.random() * 11 + 1);
        CryFour = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $("#score").text("Yout Current Score is " + userTotal);
    }



});