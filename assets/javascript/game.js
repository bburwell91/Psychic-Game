var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var gamesWon = 0;
var gamesLost = 0;
var guessesRemaining = 9;
var lettersGuessed = [];
var letterToGuess = [];
var previousGameLetter = [];


// Loading my game and computer guess
window.onload = function() {
	var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    letterToGuess.push(computerChoice);
    console.log(letterToGuess[0]);
    
    
    document.querySelector("#wins").innerHTML = "Wins: " + gamesWon;
    document.querySelector("#losses").innerHTML = "Losses: " + gamesLost;
    document.querySelector("#guesses-left").innerHTML = "# of guesses remaining: " + guessesRemaining;
    document.querySelector("#guesses").innerHTML = "Letters guessed: " + lettersGuessed;
    document.querySelector("#previous-game").innerHTML = "Previous rounds letter: " + previousGameLetter;
}

document.onkeyup = function(event) {

    var userGuess = event.key;

    if ((userGuess === letterToGuess[0]) && (guessesRemaining > 0)) {
        gamesWon++;
        guessesRemaining = 9;
        lettersGuessed = [];
        letterToGuess = [];
        previousGameLetter = [];
        var computerChoice = letters[Math.floor(Math.random() * letters.length)];
        previousGameLetter.push(computerChoice);
        letterToGuess.push(computerChoice);
        console.log(letterToGuess[0]);
    }

    else if ((userGuess !== letterToGuess[0]) && (guessesRemaining > 0)) {
        guessesRemaining--;
        lettersGuessed.push(" " + userGuess);
    }

    else if (guessesRemaining === 0) {
        gamesLost++;
        guessesRemaining = 9;
        lettersGuessed = [];
        letterToGuess = [];
        previousGameLetter = [];
        var computerChoice = letters[Math.floor(Math.random() * letters.length)];
        previousGameLetter.push(computerChoice);
        letterToGuess.push(computerChoice);
        console.log(letterToGuess[0]);
    }

    document.querySelector("#wins").innerHTML = "Wins: " + gamesWon;
    document.querySelector("#losses").innerHTML = "Losses: " + gamesLost;
    document.querySelector("#guesses-left").innerHTML = "# of guesses remaining: " + guessesRemaining;
    document.querySelector("#guesses").innerHTML = "Letters guessed: " + lettersGuessed;
    document.querySelector("#previous-game").innerHTML = "Previous rounds letter: " + previousGameLetter;
};
