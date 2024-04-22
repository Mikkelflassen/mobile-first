document.addEventListener("DOMContentLoaded", function () {
  const programs = document.querySelectorAll(".program");
  const exercisesContainer = document.getElementById("exercises-container");
  const exerciseDescription = document.getElementById("exercise-description");
  const exerciseVideo = document.getElementById("exercise-video");
  const exerciseTimer = document.getElementById("exercise-timer");
  const exerciseWeight = document.getElementById("exercise-weight");
  const exerciseReps = document.getElementById("exercise-reps");
  const exerciseSets = document.getElementById("exercise-sets");

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  // Sample data for exercises
  const exercises = {
    program1: [
      {
        name: "bench press",
        description: "Description of Exercise 2",
        videoUrl: "https://www.youtube.com/embed/rvHI6ZG4Jc4", // Replace VIDEO_ID with the actual YouTube video ID
        duration: 300,
      },
      {
        name: "Exercise 2",
        description: "Description of Exercise 2",
        videoUrl: "video2.mp4",
        duration: 90,
      },
      // Add more exercises as needed
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
      const exerciseDescription = document.createElement("p");
      exerciseDescription.textContent = exercise.description;
      const exerciseVideo = document.createElement("video");
      exerciseVideo.src = exercise.videoUrl;

      // Append exercise details to exercise container
      exerciseItem.appendChild(exerciseName);
      exerciseItem.appendChild(exerciseDescription);
      exerciseItem.appendChild(exerciseVideo);

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
    startTimerBtn.addEventListener("click", function () {
      startTimer(exercise);
      // Save exercise data to Firebase when timer starts
      saveExerciseData(exercise);
    });
  }

  // Function to start the countdown timer
  function startTimer(exercise) {
    const duration = parseInt(exercise.duration); // Get duration from exercise data
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

  // Function to save exercise data to Firebase
  function saveExerciseData(exercise) {
    const program = document
      .querySelector(".program.active")
      .getAttribute("data-program");

    const data = {
      exerciseName: exercise.name,
      weight: exerciseWeight.value,
      reps: exerciseReps.value,
      sets: exerciseSets.value,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    };

    // Save data to Firebase database
    firebase
      .database()
      .ref("programs/" + program)
      .push(data);
  }

  // Event listener for exercise clicks
  exercisesContainer.addEventListener("click", function (event) {
    const clickedExercise = event.target.closest(".exercise");
    if (clickedExercise) {
      const exerciseName = clickedExercise.textContent;
      const program = document
        .querySelector(".program.active")
        .getAttribute("data-program");
      const exercise = exercises[program].find(
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

  // Function to clear exercise details
  function clearExerciseDetails() {
    exerciseDescription.textContent = "";
    exerciseVideo.src = "";
    exerciseWeight.value = "";
    exerciseReps.value = "";
    exerciseSets.value = "";
    document.querySelector(".exercise-details").style.display = "none";
  }

  // Function to clear and hide the timer
  function clearTimer() {
    clearInterval(timerInterval);
  }
});
