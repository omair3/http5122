//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
 function avgFive(number1,number2,number3,number4,number5){
    avgFive=((number1+number2+number3+number4+number5)/5).toFixed(1);
    return avgFive;  
 }
 avgFive(5,10,15,20,25);
 console.log (avgFive);
 


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var course1=80;
var course2=90;
var course3=60;
var course4=87;
var course5=92;

function checkPerformance(course1,course2,course3,course4,course5){
    let avgFive=(course1+course2+course3+course4+course5)/5
    if (avgFive>70) {
        alert("Congrats your avg is above 70");
     } 
     else {
        alert("Review required !");
     }
 
}
checkPerformance(course1,course2,course3,course4,course5)