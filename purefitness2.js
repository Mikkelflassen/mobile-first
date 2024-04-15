document.addEventListener("DOMContentLoaded", function () {
  const programs = document.querySelectorAll(".program");
  const exercisesContainer = document.getElementById("exercises-container");
  const exerciseDescription = document.getElementById("exercise-description");
  const exerciseVideo = document.getElementById("exercise-video");
  const exerciseTimer = document.getElementById("exercise-timer");
  const exerciseWeight = document.getElementById("exercise-weight");
  const exerciseReps = document.getElementById("exercise-reps");
  const exerciseSets = document.getElementById("exercise-sets");

  // Sample data for exercises
  const exercises = {
    program1: [
      {
        name: "bench press",
        description: "Description of Exercise 1",
        videoUrl: "https://www.youtube.com/embed/rvHI6ZG4Jc4",
        duration: 300,
      },
      // Define other exercises for program1
    ],
    program2: [
      // Define exercises for program2
    ],
    program3: [
      // Define exercises for program3
    ],
    // Define exercises for other programs
  };

  // Global variable to hold the timer interval
  let timerInterval;

  // Function to display exercises for selected program
  function displayExercises(program) {
    exercisesContainer.innerHTML = ""; // Clear previous exercises
    exercises[program].forEach((exercise) => {
      const exerciseItem = document.createElement("div");
      exerciseItem.classList.add("exercise");

      // Create elements for exercise details
      const exerciseName = document.createElement("h3");
      exerciseName.textContent = exercise.name;

      // Append exercise name to exercise container
      exerciseItem.appendChild(exerciseName);

      // Add click event listener to exercise container
      exerciseItem.addEventListener("click", function () {
        showExerciseDetails(exercise);
        loadExerciseData(exercise);
      });

      // Append exercise container to exercises container
      exercisesContainer.appendChild(exerciseItem);
    });
  }

  // Function to show exercise details when clicked
  function showExerciseDetails(exercise) {
    // Clear and hide the timer
    clearTimer();
    // Clear exercise details
    clearExerciseDetails();

    exerciseDescription.textContent = exercise.description;
    exerciseVideo.src = exercise.videoUrl;
    exerciseWeight.value = "";
    exerciseReps.value = "";
    exerciseSets.value = "";
    document.querySelector(".exercise-details").style.display = "block";

    // Set initial duration
    const startTimerBtn = document.getElementById("start-timer-btn");
    startTimerBtn.dataset.duration = exercise.duration;

    // Add event listener to start timer button
    startTimerBtn.addEventListener("click", startTimer);
  }

  // Function to start the countdown timer
  function startTimer() {
    const duration = parseInt(this.dataset.duration); // Get initial duration from button data attribute
    clearInterval(timerInterval); // Clear any existing timer
    let timer = duration;
    timerInterval = setInterval(function () {
      if (timer <= 0) {
        clearInterval(timerInterval);
        exerciseTimer.textContent = "Time's up!";
      } else {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        exerciseTimer.textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
        timer--;
      }
    }, 1000);
  }

  // Function to load exercise data from local storage
  function loadExerciseData(exercise) {
    const storedExercises = JSON.parse(localStorage.getItem("exercises")) || {};
    const exerciseData = storedExercises[exercise.name];
    if (exerciseData && exerciseData.length > 0) {
      const lastExerciseData = exerciseData[exerciseData.length - 1];
      exerciseWeight.value = lastExerciseData.weight || "";
      exerciseReps.value = lastExerciseData.reps || "";
      exerciseSets.value = lastExerciseData.sets || "";
    }
  }

  // Event listener for exercise clicks
  exercisesContainer.addEventListener("click", function (event) {
    const clickedExercise = event.target.closest(".exercise");
    if (clickedExercise) {
      const exerciseNameElement = clickedExercise.querySelector("h3");
      if (exerciseNameElement) {
        const exerciseName = exerciseNameElement.textContent;
        const program = document
          .querySelector(".program.active")
          .getAttribute("data-program");
        const exercise = exercises[program].find(
          (ex) => ex.name === exerciseName
        );
        if (exercise) {
          showExerciseDetails(exercise);
          loadExerciseData(exercise);
        }
      }
    }
  });

  // Event listener for program selection
  programs.forEach((program) => {
    program.addEventListener("click", function () {
      const selectedProgram = this.getAttribute("data-program");
      displayExercises(selectedProgram);
      // Clear exercise details and timer when a new program is selected
      clearExerciseDetails();
      clearTimer();
    });
  });

  // Function to clear exercise details
  function clearExerciseDetails() {
    exerciseDescription.textContent = "";
    exerciseVideo.src = "";
    exerciseTimer.textContent = "";
    exerciseWeight.value = "";
    exerciseReps.value = "";
    exerciseSets.value = "";
    document.querySelector(".exercise-details").style.display = "none";
  }
  document.addEventListener("DOMContentLoaded", function () {
    const programs = document.querySelectorAll(".program");
    const exercisesContainer = document.getElementById("exercises-container");
    const exerciseDescription = document.getElementById("exercise-description");
    const exerciseVideo = document.getElementById("exercise-video");
    const exerciseTimer = document.getElementById("exercise-timer");
    const exerciseWeight = document.getElementById("exercise-weight");
    const exerciseReps = document.getElementById("exercise-reps");
    const exerciseSets = document.getElementById("exercise-sets");

    // Sample data for exercises
    const exercises = {
      program1: [
        {
          name: "bench press",
          description: "Description of Exercise 1",
          videoUrl: "https://www.youtube.com/embed/rvHI6ZG4Jc4",
          duration: 300,
        },
        // Define other exercises for program1
      ],
      program2: [
        // Define exercises for program2
      ],
      program3: [
        // Define exercises for program3
      ],
      // Define exercises for other programs
    };

    // Global variable to hold the timer interval
    let timerInterval;

    // Function to display exercises for selected program
    function displayExercises(program) {
      exercisesContainer.innerHTML = ""; // Clear previous exercises
      exercises[program].forEach((exercise) => {
        const exerciseItem = document.createElement("div");
        exerciseItem.classList.add("exercise");

        // Create elements for exercise details
        const exerciseName = document.createElement("h3");
        exerciseName.textContent = exercise.name;

        // Append exercise name to exercise container
        exerciseItem.appendChild(exerciseName);

        // Add click event listener to exercise container
        exerciseItem.addEventListener("click", function () {
          showExerciseDetails(exercise);
          loadExerciseData(exercise);
        });

        // Append exercise container to exercises container
        exercisesContainer.appendChild(exerciseItem);
      });
    }

    // Function to show exercise details when clicked
    function showExerciseDetails(exercise) {
      // Clear and hide the timer
      clearTimer();
      // Clear exercise details
      clearExerciseDetails();

      exerciseDescription.textContent = exercise.description;
      exerciseVideo.src = exercise.videoUrl;
      exerciseWeight.value = "";
      exerciseReps.value = "";
      exerciseSets.value = "";
      document.querySelector(".exercise-details").style.display = "block";

      // Set initial duration
      const startTimerBtn = document.getElementById("start-timer-btn");
      startTimerBtn.dataset.duration = exercise.duration;

      // Add event listener to start timer button
      startTimerBtn.addEventListener("click", startTimer);
    }

    // Function to start the countdown timer
    function startTimer() {
      const duration = parseInt(this.dataset.duration); // Get initial duration from button data attribute
      clearInterval(timerInterval); // Clear any existing timer
      let timer = duration;
      timerInterval = setInterval(function () {
        if (timer <= 0) {
          clearInterval(timerInterval);
          exerciseTimer.textContent = "Time's up!";
        } else {
          let minutes = Math.floor(timer / 60);
          let seconds = timer % 60;
          exerciseTimer.textContent = `${minutes}:${
            seconds < 10 ? "0" : ""
          }${seconds}`;
          timer--;
        }
      }, 1000);
    }

    // Function to load exercise data from local storage
    function loadExerciseData(exercise) {
      const storedExercises =
        JSON.parse(localStorage.getItem("exercises")) || {};
      const exerciseData = storedExercises[exercise.name];
      if (exerciseData && exerciseData.length > 0) {
        const lastExerciseData = exerciseData[exerciseData.length - 1];
        exerciseWeight.value = lastExerciseData.weight || "";
        exerciseReps.value = lastExerciseData.reps || "";
        exerciseSets.value = lastExerciseData.sets || "";
      }
    }

    // Event listener for exercise clicks
    exercisesContainer.addEventListener("click", function (event) {
      const clickedExercise = event.target.closest(".exercise");
      if (clickedExercise) {
        const exerciseNameElement = clickedExercise.querySelector("h3");
        if (exerciseNameElement) {
          const exerciseName = exerciseNameElement.textContent;
          const program = document
            .querySelector(".program.active")
            .getAttribute("data-program");
          const exercise = exercises[program].find(
            (ex) => ex.name === exerciseName
          );
          if (exercise) {
            showExerciseDetails(exercise);
            loadExerciseData(exercise);
          }
        }
      }
    });

    // Event listener for program selection
    programs.forEach((program) => {
      program.addEventListener("click", function () {
        const selectedProgram = this.getAttribute("data-program");
        displayExercises(selectedProgram);
        // Clear exercise details and timer when a new program is selected
        clearExerciseDetails();
        clearTimer();
      });
    });

    // Function to clear exercise details
    function clearExerciseDetails() {
      exerciseDescription.textContent = "";
      exerciseVideo.src = "";
      exerciseTimer.textContent = "";
      exerciseWeight.value = "";
      exerciseReps.value = "";
      exerciseSets.value = "";
      document.querySelector(".exercise-details").style.display = "none";
    }

    // Function to clear and hide the timer
    function clearTimer() {
      clearInterval(timerInterval);
    }

    // Load initial program
    displayExercises("program1");
  });

  // Function to clear and hide the timer
  function clearTimer() {
    clearInterval(timerInterval);
  }

  // Load initial program
  displayExercises("program1");
});
