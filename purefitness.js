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
        videoUrl: "https://www.youtube.com/embed/rvHI6ZG4Jc4", // Replace VIDEO_ID with the actual YouTube video ID
        duration: 300,
      },
      {
        name: "Exercise 2",
        description: "Description of Exercise 2",
        videoUrl: "video2.mp4",
        duration: 90,
      },
      {
        name: "Exercise 3",
        description: "Description of Exercise 3",
        videoUrl: "video2.mp4",
        duration: 90,
      },
      {
        name: "beach press",
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
      {
        name: "Exercise 3",
        description: "Description of Exercise 3",
        videoUrl: "video2.mp4",
        duration: 90,
      },
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
      {
        name: "Exercise 3",
        description: "Description of Exercise 3",
        videoUrl: "video2.mp4",
        duration: 90,
      },
      // Add more exercises as needed
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
      {
        name: "Exercise 3",
        description: "Description of Exercise 3",
        videoUrl: "video2.mp4",
        duration: 90,
      },
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
      {
        name: "Exercise 3",
        description: "Description of Exercise 3",
        videoUrl: "video2.mp4",
        duration: 90,
      },
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
      {
        name: "Exercise 3",
        description: "Description of Exercise 3",
        videoUrl: "video2.mp4",
        duration: 90,
      },
      // Add exercises for program 2
    ],
    program3: [
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
      {
        name: "Exercise 3",
        description: "Description of Exercise 3",
        videoUrl: "video2.mp4",
        duration: 10,
      },
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
      {
        name: "Exercise 3",
        description: "Description of Exercise 3",
        videoUrl: "video2.mp4",
        duration: 90,
      },
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
      {
        name: "Exercise 3",
        description: "Description of Exercise 3",
        videoUrl: "video2.mp4",
        duration: 90,
      },
      // Add exercises for program 3
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
});
