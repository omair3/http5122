// Initializing the correct team number for the group login page (We have taken 3 in this scenario)
var teamNumber = 3;

// Initializing variables for team members' first and full names
var teamMember1FirstName = "Sean", teamMember1FullName = "Sean Doyle";
var teamMember2FirstName = "Mohd", teamMember2FullName = "Mohd Omair";
var teamMember3FirstName = "Pallavi", teamMember3FullName = "Pallavi Kandikanti";
var teamMember4FirstName = "Khadeeja", teamMember4FullName = "Khadeeja Ismail";

// Initializing variable for team number entered by user and also the pop up asking for team number
var enteredTeamNumber = prompt("Enter your team number:");

// Checking if the team number is valid (We have taken this to be 3) 
if (enteredTeamNumber === null) {
    alert("Action cancelled.");
} else if (enteredTeamNumber === "") {
    alert("Please enter a team number.");
} else if (enteredTeamNumber != 3) {
    alert("Access denied! Incorrect team number.");
} else {
    // If  Team number is valid, now ask for first name
    var firstName = prompt("Enter your first name:");

    // Check for invalid input for first name (empty string or null)
    if (firstName === null) {
        alert("Action cancelled.");
    } else if (firstName === "") {
        alert("Please enter a valid first name.");
    } else {
        // Useing switch to check the first name and displaying the corresponding full name
        switch (firstName) {
            case teamMember1FirstName:
                alert("Welcome, " + teamMember1FullName + "!");
                break;
            case teamMember2FirstName:
                alert("Welcome, " + teamMember2FullName + "!");
                break;
            case teamMember3FirstName:
                alert("Welcome, " + teamMember3FullName + "!");
                break;
            case teamMember4FirstName:
                alert("Welcome, " + teamMember4FullName + "!");
                break;
            default:
                alert("Access denied! Your name does not match our records.");
        }
    }
}
