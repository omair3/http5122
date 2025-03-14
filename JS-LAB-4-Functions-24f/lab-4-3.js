//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 


//================== CREATE YOUR checkTemp FUNCTION
//This function's job is to... 
//It needs to receive... 
//It will return... 
// The function checks temp is in the range "-10" -- "30"  if its not in the range return false or else true it recieves temp from user as number and returns a boolean
function checkTemp(currentTemp) {
    if (currentTemp > 30 || currentTemp < -10) {
        return false; 
    } else {
        return true;
    }
}
let userInput = prompt("Enter the current temperature:");
let temp = parseInt(userInput);
let safeToWalk = checkTemp(temp);

// Display the message based on the result
if (safeToWalk) {
    alert("You’re good, have a nice walk!");
} else {
    alert("Yikes! This is no weather for dog walking!");
}

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
