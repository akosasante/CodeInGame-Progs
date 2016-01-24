var userChooser = function() {
	var truthChecker = 0
    while (truthChecker === 0) {
    	userChoice = prompt("Do you choose rock, paper, or scissors").toLowerCase();
        if (userChoice === "rock"|| userChoice === "paper"|| userChoice === "scissors") {
            truthChecker ++
        }
    	else {
    	console.log("Please enter a valid input");
        }
   
   }
   
   return userChoice
   
}


var computerChooser = function() {
	computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	}
	else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	}
	else {
		computerChoice = "scissors";
	}
	console.log("Computer: " + computerChoice);
	return computerChoice;
}




var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        console.log("The result is a tie!");
    }	
    
    else if(choice1 === "rock") {
        if(choice2 === "scissors") {
			gameOn = false
            return "rock wins"
        }
        else {
			gameOn = false
            return "paper wins"
        }
    }
    
    else if(choice1 === "paper") {
        if(choice2 === "rock") {
			gameOn = false
            return "paper wins";
        }
        else {
			gameOn = false
            return "scissors wins";
        }
    }
    
    else if(choice1 === "scissors") {
        if(choice2 === "rock") {
			gameOn = false
            return "rock wins";
        }
        else {
			gameOn = false
            return "scissors wins";
        }
    }
    
}

var gameOn = true;
while (gameOn = true) {
	userChooser();
	computerChooser();
	console.log(compare(userChooser, computerChooser));
}
