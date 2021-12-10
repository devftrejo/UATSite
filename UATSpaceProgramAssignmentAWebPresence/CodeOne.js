// This is how to comment in JavaScript.

// Fernando Trejo's Assignment Mission Control Operator Login.

// The purpose of this function is to start and control the countdown.
function StartTheCountdown() {
    // function, function name, and empty parameters (), followed by code to be executed in {}.

    // console.log with string to test the function in the console.
    console.log("Countdown Started");
    // Declaration of variables, used to display to the user on the screen.

    // variable containers for storing data (values).
    var currTime = 10;
    // For Loop will loop through the following code nested inside of it(Conditional Statements) as many number of times specified.

    //Starting in parenthesis: var sets a variable before the loop starts, next statement defines the condition fot the loop to run lastly, i++(Increment Operator) increases a value each time the code block in the loop has been executed.
    for (var i = 1; i <= 11; i++) {
        // Conditional statements if else and else if.

        // Used to perform different actions based on different conditions.
        if (i == 11) {
            // Use the setTimeout() function for the countdown.
            setTimeout(function () {
                //Code for timer.

                // Document.get... to find an element by element id.

                // InnerHTML will modify the content of an HTML element.
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            // 1000 = 1 second because we are using milliseconds.
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}

// The purpose of this function is to start and analyze the credentials entered by the user.
function checkCreds() {
    // variable containers for storing data (values).
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNumber = document.getElementById("badgeNumber").value;
    // variable container for storing data, this one will concatinate strings.
    var nameInfo = firstName + " " + lastName;
    // Conditional statements if else and else if.

    // Used to perform different actions based on different conditions.
    if (nameInfo.length >20 || nameInfo.length <2) {
        // Document.get... to find an element by element id.

        // InnerHTML will modify the content of an HTML element.
        // In this case it will let the user know that there are issues with the user's input.
        document.getElementById("loginStatus").innerHTML = "First and Last Names have invalid number of characters!";
    }
    else if (badgeNumber > 999 || badgeNumber < 100) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number!";
    }
    else {
        // Alert notifying the user that the credentials passed analysis.
        alert("Access Granted, Welcome " + nameInfo + "!");
        // After the credentials pass analysis the location.replace sends the user the desired app.
        location.replace("CountdownApp.html");
    }
}
