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
        description: "Description of Exercise 2",
        videoUrl: "https://www.youtube.com/embed/rvHI6ZG4Jc4",
        duration: 300,
        progress: [],
      },
      // Add more exercises for program 1
    ],
    program2: [
      {
        name: "Exercise 1",
        description: "Description of Exercise 1",
        videoUrl: "video1.mp4",
        duration: 300,
        progress: [],
      },
      // Add more exercises for program 2
    ],
    program3: [
      {
        name: "Exercise 1",
        description: "Description of Exercise 1",
        videoUrl: "video1.mp4",
        duration: 300,
        progress: [],
      },
      // Add more exercises for program 3
    ],
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
      const exerciseNameElement = document.createElement("h3");
      exerciseNameElement.textContent = exercise.name;
      const exerciseDescriptionElement = document.createElement("p");
      exerciseDescriptionElement.textContent = exercise.description;
      const exerciseVideoElement = document.createElement("video");
      exerciseVideoElement.src = exercise.videoUrl;

      // Append exercise details to exercise container
      exerciseItem.appendChild(exerciseNameElement);
      exerciseItem.appendChild(exerciseDescriptionElement);
      exerciseItem.appendChild(exerciseVideoElement);

      // Add click event listener to exercise container
      exerciseItem.addEventListener("click", function () {
        showExerciseDetails(exercise);
      });

      // Append exercise container to exercises container
      exercisesContainer.appendChild(exerciseItem);
    });
  }

  // Function to show exercise details when clicked
  function showExerciseDetails(exercise) {
    // Set exercise description and video URL
    exerciseDescription.textContent = exercise.description;
    exerciseVideo.src = exercise.videoUrl;

    // Retrieve exercise data from the input fields
    const weight = parseFloat(exerciseWeight.value) || 0;
    const reps = parseInt(exerciseReps.value) || 0;
    const sets = parseInt(exerciseSets.value) || 0;

    // Display exercise details
    exerciseWeight.value = weight;
    exerciseReps.value = reps;
    exerciseSets.value = sets;

    document.querySelector(".exercise-details").style.display = "block";

    // Set initial duration
    const startTimerBtn = document.getElementById("start-timer-btn");
    startTimerBtn.dataset.duration = exercise.duration;

    // Add event listener to start timer button
    startTimerBtn.addEventListener("click", startTimer);
  }

  // Function to save exercise progress
  function saveExerciseProgress() {
    // Get exercise name
    const exerciseName = document.querySelector(
      ".exercise-details h3"
    ).textContent;

    // Get exercise data
    const weight = parseFloat(exerciseWeight.value) || 0;
    const reps = parseInt(exerciseReps.value) || 0;
    const sets = parseInt(exerciseSets.value) || 0;

    // Find the exercise object in the array and update the progress data
    const program = document
      .querySelector(".program.active")
      .getAttribute("data-program");
    const exercise = exercises[program].find((ex) => ex.name === exerciseName);

    // Create or update progress object for the exercise
    exercise.progress = { weight, reps, sets };

    // Update exercise description with input values
    const updatedDescription = `${exerciseName}: Weight: ${weight}, Reps: ${reps}, Sets: ${sets}`;
    exerciseDescription.textContent = updatedDescription;
  }

  // Event listener for save exercise button
  const saveExerciseBtn = document.getElementById("save-exercise-btn");
  saveExerciseBtn.addEventListener("click", saveExerciseProgress);

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

  // Event listener for exercise clicks
  exercisesContainer.addEventListener("click", function (event) {
    const clickedExercise = event.target.closest(".exercise");
    if (clickedExercise) {
      const exerciseName = clickedExercise.querySelector("h3").textContent;
      const program = document.querySelector(".program.active");
      if (program) {
        const selectedProgram = program.getAttribute("data-program");
        const exercise = exercises[selectedProgram].find(
          (ex) => ex.name === exerciseName
        );
        if (exercise) {
          showExerciseDetails(exercise);
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
      clearTimer();
    });
  });

  // Function to clear and hide the timer
  function clearTimer() {
    clearInterval(timerInterval);
  }

  // Event listener for input fields to save exercise progress
  [exerciseWeight, exerciseReps, exerciseSets].forEach((input) => {
    input.addEventListener("input", saveExerciseProgress);
  });
});
