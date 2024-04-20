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
  var timerElement = document.getElementById("timer");
  var currentWordIndex = 0;
  var score = 0;
  var timeLeft = 60;
  var start = false;
  document.getElementById("user-input").disabled = true;
  
  // Initialize the game
  function init() {
    showWord();
    startTimer();
    document.getElementById("btn").disabled = true;
    document.getElementById("user-input").disabled = false;
    document.getElementById("score").textContent = "Score: " + score;
    document.getElementById("user-input").value="";
    timerElement.style.color = "black";
    timerElement.style.fontWeight = "normal";
    
    // Event listener for user input
    document.getElementById("user-input").addEventListener("input", function() {
      checkInput();
    });
  }
  
  // Display a random word
  function showWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    currentWordIndex = randomIndex;
    document.getElementById("target").textContent = words[randomIndex];
  }
  
  // Check if the user input matches the current word
  function checkInput() {
    var userInput = document.getElementById("user-input").value;
    var currentWord = words[currentWordIndex];
    
    if (userInput === currentWord) {
      score++;
      document.getElementById("score").textContent = "Score: " + score;
      
      // Clear the user input
      document.getElementById("user-input").value = "";
      
      // Show a new random word
      showWord();
    }
  }
  
  // Start the timer
  function startTimer() {
    timeLeft = 60;
    timerElement.textContent = "Time: " + timeLeft;
    
    var timerInterval = setInterval(function() {
      timeLeft--;
      timerElement.textContent = "Time: " + timeLeft;
      
      if (timeLeft === 10) {
        timerElement.style.color = "red";
        timerElement.style.fontWeight = "bold";
      }
      
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        gameOver();
      }
    }, 1000);
  }
  
  // Game over
  function gameOver() {
    document.getElementById("target").textContent = "Game Over";
    document.getElementById("user-input").disabled = true;
    document.getElementById("btn").disabled = false;
    score = 0;
  }