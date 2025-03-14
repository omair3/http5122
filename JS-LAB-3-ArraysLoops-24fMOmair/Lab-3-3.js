//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var shoppingCart=[];
var cartTotal=0;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (cartTotal < 35) {
	//GET ITEM COST FROM USER
	var price = prompt("Enter the price of the item:$ ");

	
	//CONVERT USER INPUT TO A NUMBER
	price = parseInt(price);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	cartTotal= cartTotal+ price;  

	
	//PUSH ITEM COST TO CART ARRAY
	shoppingCart.push(price);
}

	
	//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!");

alert("Your cart total is:$" +cartTotal);

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + shoppingCart.join(" | "));


 


 