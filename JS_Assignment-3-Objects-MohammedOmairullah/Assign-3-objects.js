//Creating a cricket player object with four properties
 var cricketPlayer={
    name:"Kane Williamson",
    team:"New Zealand",
    totalRuns:18886,
    centuries:47,
 
 //Creating a function that updates the runs
     updateRuns:function(recentRuns){
        cricketPlayer.totalRuns=cricketPlayer.totalRuns+recentRuns;
        alert(cricketPlayer.name + " has now scored " + cricketPlayer.totalRuns + " runs!");
     }
    }
//Output object to console
    console.log(cricketPlayer);
//Sending a popup to the user that updates the runs scored by the Cricketer
    recentRuns = parseInt(prompt("Enter new runs scored by " + cricketPlayer.name, cricketPlayer.totalRuns));
    cricketPlayer.totalRuns =cricketPlayer.totalRuns+recentRuns;
//Sending a popup to the user that updates the centuries scored by the Cricketer    
    var newCenturies = parseInt(prompt("Enter updated centuries for " + cricketPlayer.name, cricketPlayer.centuries));
cricketPlayer.centuries = cricketPlayer.centuries+newCenturies;
    
// Call method to update runs
cricketPlayer.updateRuns(100);

// Final object state
console.log(cricketPlayer);