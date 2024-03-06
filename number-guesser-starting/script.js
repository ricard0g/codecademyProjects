let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// create a function to generate the Target number of each round in the game
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};
console.log(generateTarget());

// function to compare the guesses between the computer, the human and the target number
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    if (!(humanGuess >= 0 && humanGuess <= 9)) {
        console.log('Out of limits!')
        return window.alert('Your number is out of limits, choose between 0-9 only');;
    }
    
    // we get the distance of each guess from the target number by making the substraction operation, the result from that is the amount of numbers there are between the guess and the target.
    const humanDistance = Math.abs(humanGuess - targetNumber);// we use Math.abs() because the operation can resuult in a negative number
    const computerDistance = Math.abs(computerGuess - targetNumber);
 
    console.log(`Human is ${humanDistance} from Target`);
    console.log(`Computer is ${computerDistance} from target`);
    
    // control flow to determine the winner
    if (humanDistance === computerDistance) {
        console.log('Human wins by a Tie!');
        return true;
    } else if (humanDistance > computerDistance) {
        console.log('Computer wins!');
        return false;
    } else if (humanDistance < computerDistance) {
        console.log('Human wins!');
        return true;
    }
}

// function to increase the winner's score after each round
function updateScore(winner) {
    
    if (winner === 'human') {
        console.log('+1 for the Human');
        humanScore++;
    } else {
        console.log('+1 for the Computer');
        computerScore++;
    };
}

// function to update the round number by each round
function advanceRound() {
    currentRoundNumber++
};

//example
compareGuesses(84, 6, 8);