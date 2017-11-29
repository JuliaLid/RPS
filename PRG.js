
	
	var win = 0;
	var loss = 0;
	var tie = 0;

	
	document.onkeyup = function(event) {
		// onkeyup is an event that listens for a keyboard press. When it happens, it passes the event as an argument to the funtion.
       var userGuess = event.key;
       // event.key refers to the value of the key that was pressed

        var computerChoices = ["r","p","s"]; 
     
     	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     	// Math.random is a global object's function that generates a random number from 0 to 1. It is then multiplied by the length of the array (3) and rounded down by Math.floor.

    	if ((userGuess==="r") || (userGuess==="p") || (userGuess==="s")) {

		      if ((userGuess==="r") && (computerGuess==="s")) {
				win++;
			}	else if ((userGuess==="r") && (computerGuess==="p")) {
				loss++;			
			}	else if ((userGuess==="s") && (computerGuess==="r")) {
				loss++;		
			}   else if ((userGuess==="s") && (computerGuess==="p")) {
				win++;		
			}	else if ((userGuess==="p") && (computerGuess==="r")) {
				win++;
			}	else if ((userGuess==="p") && (computerGuess==="s")) {
				loss++
			}  else {
		 		tie++;
		 	}
		 } else {
		 	alert ("Enter the correct letter");
		 }
		 	var output = 
			"<p> You chose: " + userGuess + "</p>"+
			"<p> The computer chose: " + computerGuess + "</p>" +
			"<p> Wins: " + win + "</p>"+
			"<p> Loss: " + loss + "</p>"+
			"<p> Tie: " + tie + "</p>";
			
		document.getElementById("game").innerHTML = output;

		};


	

