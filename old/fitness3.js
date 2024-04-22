document.addEventListener("DOMContentLoaded", function () {
  const programs = document.querySelectorAll(".program");
  const exercisesContainer = document.getElementById("exercises-container");
  const exerciseDescription = document.getElementById("exercise-description");
  const exerciseVideo = document.getElementById("exercise-video");
  const exerciseTimer = document.getElementById("exercise-timer");
  const exerciseWeight = document.getElementById("exercise-weight");
  const exerciseReps = document.getElementById("exercise-reps");
  const exerciseSets = document.getElementById("exercise-sets");

  // Initialize Firebase with your configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD0F7F4vG4-ZpIeFkOxj04Y_XEJfkyq0_s",
    authDomain: "mobile-first-3a938.firebaseapp.com",
    projectId: "mobile-first-3a938",
    storageBucket: "mobile-first-3a938.appspot.com",
    messagingSenderId: "586066755952",
    appId: "1:586066755952:web:131748d792cbd4cbf28fb5",
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  // Function to write exercise progress data to Firebase
  function writeExerciseProgress(exerciseName, progress) {
    const progressRef = database.ref(`exerciseProgress/${exerciseName}`);
    return progressRef.set(progress);
  }

  // Function to read exercise progress data from Firebase
  function readExerciseProgress(exerciseName) {
    const progressRef = database.ref(`exerciseProgress/${exerciseName}`);
    return progressRef
      .once("value")
      .then((snapshot) => {
        return snapshot.val();
      })
      .catch((error) => {
        console.error("Error reading data:", error);
        return null;
      });
  }

  // Display exercises for selected program
  function displayExercises(program) {
    exercisesContainer.innerHTML = ""; // Clear previous exercises
    const exercises = getExercisesForProgram(program);
    exercises.forEach((exercise) => {
      const exerciseItem = document.createElement("div");
      exerciseItem.classList.add("exercise");

      // Create elements for exercise details
      const exerciseName = document.createElement("h3");
      exerciseName.textContent = exercise.name;
      const exerciseDescriptionElement = document.createElement("p");
      exerciseDescriptionElement.textContent = exercise.description;
      const exerciseVideoElement = document.createElement("iframe");
      exerciseVideoElement.src = exercise.videoUrl;
      exerciseVideoElement.setAttribute("allowfullscreen", true);

      // Append exercise details to exercise container
      exerciseItem.appendChild(exerciseName);
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

  // Function to get exercises for selected program
  function getExercisesForProgram(program) {
    return exercises[program] || [];
  }

  // Event listener for exercise clicks
  exercisesContainer.addEventListener("click", function (event) {
    const clickedExercise = event.target.closest(".exercise");
    if (clickedExercise) {
      const exerciseName = clickedExercise.querySelector("h3").textContent;
      const program = document
        .querySelector(".program.active")
        .getAttribute("data-program");
      const exercise = getExercisesForProgram(program).find(
        (ex) => ex.name === exerciseName
      );
      if (exercise) {
        showExerciseDetails(exercise);
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

  // Sample data for exercises
  const exercises = {
    program1: [
      {
        name: "Exercise 1",
        description: "Description of Exercise 1",
        videoUrl: "video1.mp4",
        duration: 300,
      },
      {
        name: "Exercise 2",
        description: "Description of Exercise 2",
        videoUrl: "video2.mp4",
        duration: 90,
      },
      // Add more exercises for program 1 if needed
    ],
    program2: [
      {
        name: "Exercise 1",
        description: "Description of Exercise 1",
        videoUrl: "video1.mp4",
        duration: 300,
      },
      {
        name: "Exercise 2",
        description: "Description of Exercise 2",
        videoUrl: "video2.mp4",
        duration: 90,
      },
      // Add more exercises for program 2 if needed
    ],
    // Add more programs with exercises as needed
  };

  // Initially display exercises for the first program
  displayExercises("program1");
});
