//Define variables outside of the function
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correct = 0;
var incorrect = 0;
var guesses = 10;
var endGame = 0;
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];  
var userGuessArray = [];
     


  //Begin function with event of key release
  document.onkeyup = function(event) {
      
    //User guess is whatever key they pushed    
    var userGuess = event.key;     
 
    //Pushes guesses into an array to record them
    userGuessArray.push(userGuess + "  ");

    //begin for loop to iterate through our alphabet array
    for(var i = 0; i < alphabet.length; i++) {

      //begin if guess is in the alphabet array
      if(userGuess === alphabet[i]) {

        //if guesses drop to zero, reset guesses to 10
        //and increase losses by one
        if(guesses === 0) {
            return((guesses = 10) && (userGuessArray = [])) && incorrect++;

        //if guess by user is what the computer is thinking of
        //reset guesses to 10, and increase win by one
        } else if (userGuess === computerGuess) {
            return((guesses = 10) && (userGuessArray = [])) && correct++;

        //if not guessed correctly and guesses above zero
        //then decrease guesses by one
        } else {
            guesses--;
        }

          //variable of desired html with javascript variables
          //that will change as letters are chosen by user
          var html = "<h1>The Psychic Game</h1>" +
          "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + correct + "</p>" +
          "<p>Losses: " + incorrect + "</p>" +
          "<p>Guesses Left: " + guesses + "</p>" +
          "<p>Your Guesses so far: " + userGuessArray.join("") + "</p>";
          
          //puts the html variable into the html document inside
          //the div with the id game
          document.querySelector("#game").innerHTML = html;
        }
      }  
    };