// Initializing variables for movie names
var movie1 = "Fight Club" ;
var movie2 = "Goodfellas" ;
var movie3 = "12 Angry Men";
var movie4 = " The Godfather";
var movie5 = "Jaws" ;
var movie6 = "Kill Bill" ;
var movie7 = "Casablanca" ;

// Array to hold the movie names

var movieList=[movie1,movie2,movie3,movie4,movie5,movie6,movie7];

// Output message to console that lists all the movies with numbers
console.log("Top 7 Movies List:");
for (var i=0; i<movieList.length; i++){
  console.log("Movie " + (i+1) + ": " + movieList[i]);
}

// Prompting user for input

var userInput=prompt("Which top 7 movie would you like ? \nPick a a number :1-7");
userInput=parseInt(userInput);

// Validating the input and re asking the user if input isnt valid

while (isNaN(userInput) || userInput<1 || userInput>7){
    alert("Please enter a number between 1-7 ");

    userInput=prompt("Which top 7 movie would you like ? \nPick a number :1-7");
    userInput=parseInt(userInput);  

} 
// Displaying the the movie name corresponding to the number selected in the movielist

alert(" Number " +  userInput  +  " on the list is " + movieList[userInput-1]+ ".");



 