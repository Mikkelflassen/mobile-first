document.addEventListener("DOMContentLoaded", function () {
  // Function to start the countdown timer
  function startTimer(duration, timerElement) {
    let timer = duration;
    let timerInterval = setInterval(function () {
      if (timer <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
      } else {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        timerElement.textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
        timer--;
      }
    }, 1000);
  }

  // Event listener for start timer buttons
  const startTimerBtns = document.querySelectorAll(".start-timer-btn");
  startTimerBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const duration = parseInt(this.dataset.duration); // Get duration from button data attribute
      const timerElement = this.parentNode.querySelector(".exercise-timer");
      startTimer(duration, timerElement);
    });
  });
});
