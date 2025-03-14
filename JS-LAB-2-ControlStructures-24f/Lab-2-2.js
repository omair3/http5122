//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		     var username="dart";
		// Correct password
		     var  password="vader";
		// user name input
		     var  userinput;
		// password input
        
		  var  passwordinput;


//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
  userinput=prompt("Please enter the username");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
    console.log(userinput);
//5. CREATE POPUP BOX FOR PASSWORD
passwordinput=prompt("Please enter the password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
    console.log(passwordinput)
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (username===userinput && password===passwordinput){
	alert("Welcome Back Dart");
	console.log("Login Successful");
}
else {
	alert("Invalid username or password");
	console.log("Login Unsccessful");
}
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE