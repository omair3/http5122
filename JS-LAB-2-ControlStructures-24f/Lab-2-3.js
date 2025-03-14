//######## LAB 2-3 EMAIL SIGNUP ########
alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
 var userChoice
 var userEmail

//==== LOGIC =============
userChoice=confirm("Would you like to subscribe to our Email Newsletter");
if (userChoice === true) {
    userEmail = prompt("Please enter the Email", "me@example.com");
    if (userEmail === null || userEmail === "" || userEmail === "me@example.com") {
        alert("Thank you, but your email is not valid.");
    } else {
        alert("Thank you, our next newsletter will be sent to " + userEmail );
    }
} else {
    alert("Thank you, we will not bother you again.");
}
