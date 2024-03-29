/**
* The Number Guessing Game allows users to play
* a game to guess a number between 1-100, allowing
* to enter attempts, win/lose system, and have fun.
*
* @author  Carly Perdue
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
//Importing the readline module for reading data from standard input
var readline = require("readline");
var inout = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Global variables within the game that are to be used for the game's state.
var numAttempts;
var numberGuessed;
var initialRun;
var gameLost;
var generatedNumber;
/**
 * Sets up the number guessing game by setting defaults
 * and randomly generating a number.
 *
 * @return {void} Nothing
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
 *
 * @return {void} Nothing
 */
function startHere() {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var inout_1, inout_1_1, userInput, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("Welcome to Number Guessing game by Carly Perdue.\n");
                    console.log("Enter number of attempts:");
                    setUpGame();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    inout_1 = __asyncValues(inout);
                    _b.label = 2;
                case 2: return [4 /*yield*/, inout_1.next()];
                case 3:
                    if (!(inout_1_1 = _b.sent(), !inout_1_1.done)) return [3 /*break*/, 5];
                    userInput = inout_1_1.value;
                    // Check if user is initial game state
                    if (initialRun) {
                        // Make sure user input is a valid integer for attempts
                        if (parseInt(userInput.trim())) {
                            numAttempts = userInput;
                            initialRun = false;
                            console.log("Great, time to start guessing!");
                            process.stdout.write("> ");
                        }
                        else {
                            console.log("Please enter a valid number for attempts.");
                        }
                    }
                    else {
                        // Allow the user to enter quit at any time
                        if (userInput.trim() === "quit")
                            return [3 /*break*/, 5];
                        // Allow the user to be shown a help message if 'help' typed
                        else if (userInput.trim() === "help") {
                            console.log("Enter a number between 1 and 100 and press enter to see if you guessed the correct number.");
                            process.stdout.write("> ");
                        }
                        else {
                            // Subtract attempts (means user is in game mode)
                            numAttempts--;
                            if (userInput.trim() == generatedNumber) {
                                numberGuessed = true;
                                console.log("Got it. Play again (y/n)?");
                                process.stdout.write("> ");
                            }
                            else if (userInput.trim() > generatedNumber) {
                                console.log("Too high, try again!");
                            }
                            else if (userInput.trim() < generatedNumber) {
                                console.log("Too low, try again!");
                            }
                            else if (numAttempts === 0) {
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
                                }
                                else if (userInput.trim() === "n")
                                    return [3 /*break*/, 5];
                            }
                            else {
                                console.log("Your guess: " + userInput + ". You have " + numAttempts + " left!");
                                process.stdout.write("> ");
                            }
                        }
                    }
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(inout_1_1 && !inout_1_1.done && (_a = inout_1["return"]))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(inout_1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    console.log("\nBye!");
                    return [2 /*return*/];
            }
        });
    });
}
startHere();
