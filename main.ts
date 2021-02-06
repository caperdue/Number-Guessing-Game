/**
 * The Number Guessing Game allows users to play
 * a game to guess a number between 1-100, allowing
 * to enter attempts, win/lose system, and have fun.
 *
 * @author  Carly Perdue
 */

//Importing the readline module for reading data from standard input
const readline = require("readline");
const inout = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Global variables within the game that are to be used for the game's state.
let numAttempts: number;
let numberGuessed: boolean;
let initialRun: boolean;
let gameLost: boolean;
let generatedNumber: number;

/**
 * Sets up the number guessing game by setting defaults
 * and randomly generating a number.
 */
function setUpGame() {
  numberGuessed = false;
  initialRun = true;
  gameLost = false;
  generatedNumber = Math.floor(Math.random() * 100) + 1;
  process.stdout.write("> ");
}

/**
 * Starts the number guessing game for users to guess a randomly
 * generated number from 1-100.
 */
async function startHere() {
  console.log("Welcome to Number Guessing game by Carly Perdue.\n");
  console.log("Enter number of attempts:");
  setUpGame();
  // Input being read from keyboard for user input
  for await (const userInput of inout) {
    // Check if user is initial game state
    if (initialRun) {
      // Make sure user input is a valid integer for attempts
      if (parseInt(userInput.trim())) {
        numAttempts = userInput;
        initialRun = false;
        console.log("Great, time to start guessing!");
        process.stdout.write("> ");
      } else {
        console.log("Please enter a valid number for attempts.");
      }
    } else {
      // Allow the user to enter quit at any time
      if (userInput.trim() === "quit") break;
      // Allow the user to be shown a help message if 'help' typed
      else if (userInput.trim() === "help") {
        console.log(
          "Enter a number between 1 and 100 and press enter to see if you guessed the correct number."
        );
        process.stdout.write("> ");
      } else {
        // Subtract attempts (means user is in game mode)
        numAttempts--;
        if (userInput.trim() == generatedNumber) {
          numberGuessed = true;
          console.log("Got it. Play again (y/n)?");
          process.stdout.write("> ");
        } else if (userInput.trim() > generatedNumber) {
          console.log("Too high, try again!");
        } else if (userInput.trim() < generatedNumber) {
          console.log("Too low, try again!");
        } else if (numAttempts === 0) {
          gameLost = true;
          console.log("Sorry, you lose! Play again (y/n)?");
          process.stdout.write("> ");
        }
        // Check if game is lost or won to set up game or close game
        if (numberGuessed || gameLost) {
          if (userInput.trim() === "y") {
            console.log("\nNew secret generated.");
            console.log("Enter number of attempts:");
            setUpGame();
          } else if (userInput.trim() === "n") break;
        } else {
          console.log(
            `Your guess: ${userInput}. You have ${numAttempts} left!`
          );
          process.stdout.write("> ");
        }
      }
    }
  }
  console.log("\nBye!");
}
startHere();
