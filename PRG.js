
	var computerChoices = ["r","p","s"];
	// var userGuess;
	// var computerGuess;


	document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = document.getElementById("user");

      user.textContent = event.key;
     
     
      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Alerts the key the user pressed (userGuess).
      document.write("User guess: " + userGuess+"<br> <br>");

      // Alerts the Computer's guess.
      document.write("Computer guess: " + computerGuess + "<br><br>");

      	var userWin = document.getElementById("userWin");
		var computerWin = document.getElementById("computerWin");
		var userTie = document.getElementById("tie");

      if (userGuess==="r" && computerGuess==="s") {
		userWin = true;
	
	}	else if (userGuess==="r" && computerGuess==="p") {
		computerWin = true;
		
	}	else if (userGuess==="s" && computerGuess==="r") {
		computerWin = true
	
	}  else if (userGuess==="s" && computerGuess==="p") {
		userWin =true
	
	}	else if (userGuess==="p" && computerGuess==="r") {
		userWin =true
	}	else if (userGuess==="p" && computerGuess==="s") {
		computerWin = true
	 }  else {
	 	userTie=true
	 }

	 if (userWin){

	 }
    };


