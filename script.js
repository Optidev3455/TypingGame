// Word list
var words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "pear",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "watermelon",
  "blueberry",
  "blackberry",
  "pineapple",
  "apricot",
  "coconut",
  "papaya",
  "grapefruit",
  "lime",
  "plum",
  "pomegranate",
  "rhubarb"
];

// Get timer element from the HTML
var timerElement = document.getElementById("timer");

var currentWordIndex = 0;
var score = 0;
var timeLeft = 60;
var userInput = document.getElementById("user-input");
var startButton = document.getElementById("btn");

userInput.disabled = true;

// Function to initialize the game
function init() {
  showWord();
  startTimer();

  // Disable the start button and enable user input
  startButton.disabled = true;
  userInput.disabled = false;

  // Clear the user input and display the initial score
  userInput.value = "";
  document.getElementById("score").textContent = "Score: " + score;

  // Add an event listener to check user input
  userInput.addEventListener("input", checkInput);
}

// Function to display a random word
function showWord() {
  // Generate a random index within the range of the word list array
  currentWordIndex = Math.floor(Math.random() * words.length);

  // Set the text content of the target element to the selected word
  document.getElementById("target").textContent = words[currentWordIndex];
}

// Function to check user input
function checkInput() {
  if (userInput.value === words[currentWordIndex]) {
    score++;

    // Update the score display
    document.getElementById("score").textContent = "Score: " + score;

    // Clear the user input
    userInput.value = "";
    showWord();
  }
}

// Function to start the timer
function startTimer() {
  timeLeft = 60;

  // Update the timer display
  timerElement.textContent = "Time: " + timeLeft;

  // Start an interval to decrement the time left every second
  var timerInterval = setInterval(function () {
    timeLeft--;

    // Update the timer display
    timerElement.textContent = "Time: " + timeLeft;

    // Change the timer color and style when 10 seconds are left
    if (timeLeft === 10) {
      timerElement.style.color = "red";
      timerElement.style.fontWeight = "bold";
    }

    // End the game when the time runs out
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

// Function to handle the game over scenario
function gameOver() {
  document.getElementById("target").textContent = "Game Over";

  // Disable user input and enable the start button
  userInput.disabled = true;
  startButton.disabled = false;
  score = 0;
}