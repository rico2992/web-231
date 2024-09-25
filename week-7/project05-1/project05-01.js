"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Rico Isaac
      Date: September 25, 2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
let questionList = document.querySelectorAll("div#quiz input");

// Add an onclick event handler to the startQuiz object
startQuiz.onclick = function() {
  // Set the class of overlay to "showquiz"
  overlay.className = "showquiz";

  // Start the countdown and store the interval ID in timeID
  timeID = setInterval(countdown, 1000);
};

// Function to countdown the time
function countdown() {
  // If timeleft reaches 0
  if (timeLeft === 0) {
    // stop the timer
    clearInterval(timeID);

    // check the student answers
    let totalCorrect = checkAnswers();

    // If the student  got all the answers correct
    if (totalCorrect === correctAnswers.length) {
      // Display a congratulatory alert
      alert("Congratulations! You got 100% on the quiz!");
     } else {
      // Calculate the number of incorrect answers
      let incorrectCount = correctAnwsers.length - totalCorrect;

      // Display an alert showing the number of incorrect answers
      alert("You got " + incorrectCount + " answers wrong out of " + correctAnswers.length + ".");

      // reset the quiz time
      timeLeft = quizTime;

      //reset the quiz clock
      quizClock.value = timeLeft;

      // Hide the quiz by setting the overlay class to "hidequiz"
      overlay.className = "hidequiz";
    }

  } else {
    // Decrement the time left
    timeLeft--;

    // Update the quiz clock
    quizClock.value = timeLeft;
  }
}






/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}