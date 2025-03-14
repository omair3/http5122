//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
 
var teamMembers=["Tom Cruise","Leonardo Dicaprio","Matt Damon", "Ben Affleck"];

//OUTPUT TEAM ARRAY TO JS CONSOLE

console.log(teamMembers);

//REMOVE LAST MEMBER
 teamMembers.pop(3);
 console.log(teamMembers);
//ADD SEAN TO FRONT OF ARRAY
teamMembers.unshift("Sean")
console.log(teamMembers);

//REARRANGE THE ARRAY ALPHABETICALLY
var sorteamMembers=teamMembers.sort();
console.log(teamMembers);
//OUTPUT REQUIRED MESSAGE TO JS CONSOLE

console.log("We have " + teamMembers.length  + " team members in our group");

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

var teamMembernumber = [];
for (let i = 0; i < teamMembers.length; i++) {
    teamMembernumber[i] = "#" + (i + 1) + "." + teamMembers[i];
}
for (let j = 0; j <teamMembernumber.length; j++) {
    console.log(teamMembernumber[j]);
}
 