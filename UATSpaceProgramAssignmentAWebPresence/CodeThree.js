function playCraps() {
    // function, function name, and empty parameters (), followed by code to be executed in {}.
    // console.log with string to test the function in the console.
    console.log("Craps Started");
    // variable containers for storing data (values).
    // Math.ceil returns a number rounded up to the nearest integer.
    // Math.random is a random number generater to return a random number.
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    //Using variable sum to perform addition of the two dice.
    var sum = die1 + die2;
    // Document.get... to find an element by element id.
    // InnerHTML will modify the content of an HTML element.
    document.getElementById("die1Dis").innerHTML = die1;
    document.getElementById("die2Dis").innerHTML = die2;
    document.getElementById("sumDis").innerHTML = sum;
    // Conditional statements if else and else if.
    // Used to perform different actions based on different conditions.
    if (sum == 7 || sum == 11) {
        document.getElementById("resultDis").innerHTML = "CRAPS! - you lose.";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("resultDis").innerHTML = "DOUBLES - you win!";
    } else {
        document.getElementById("resultDis").innerHTML =
            "You did not win or lose, please play again.";
    }
}
