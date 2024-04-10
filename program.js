document.addEventListener("DOMContentLoaded", function () {
  const programButtons = document.querySelectorAll(".program-btn");
  const exerciseList = document.getElementById("exercise-list");
  const exerciseDescription = document.getElementById("exercise-description");
  const exerciseVideo = document.getElementById("exercise-video");
  let exerciseTimer = document.getElementById("exercise-timer");
  let weightInput, repInput, setInput;

  let currentExercise = null; // To keep track of the current exercise

  // Sample exercise data
  const exercises = [
    {
      name: "Bench Press",
      description: "Bench Press exercise - focus on contraction",
      videoUrl: "https://www.youtube.com/embed/4Y2ZdHCOXok",
    },
    {
      name: "Exercise 2",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/4Y2ZdHCOXok",
    },
    {
      name: "Exercise 3",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 4",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 5",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 6",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 7",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    // program 2
    {
      name: "Exercise 1",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 2",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 3",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 4",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 5",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 6",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 7",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 1",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 2",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 3",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 4",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 5",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    {
      name: "Exercise 6",
      description: "Description for Exercise 2",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
    },
    // Add more exercises as needed
  ];

  // Function to display exercises for selected program
  function displayExercises(programId) {
    // Clear previous exercises
    exerciseList.innerHTML = "";

    // Get exercises based on program id (this can be improved with more dynamic data handling)
    let selectedExercises = [];
    switch (programId) {
      case "program1":
        selectedExercises = exercises.slice(0, 7); // Example: first 3 exercises
        break;
      case "program2":
        selectedExercises = exercises.slice(7, 14); // Example: next 3 exercises
        break;
      case "program3":
        selectedExercises = exercises.slice(14, 21); // Example: last 3 exercises
        break;
      default:
        selectedExercises = [];
    }

    // Display exercises
    selectedExercises.forEach((exercise) => {
      const li = document.createElement("li");
      li.textContent = exercise.name;
      li.classList.add("exercise-item");
      li.addEventListener("click", function () {
        displayExerciseInfo(exercise);
      });
      exerciseList.appendChild(li);
    });
  }

  // Function to display exercise info when clicked
  function displayExerciseInfo(exercise) {
    // Display exercise info
    exerciseDescription.textContent = "Description: " + exercise.description;
    exerciseVideo.innerHTML =
      '<iframe width="100%" height="315" src="' +
      exercise.videoUrl +
      '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    // Clear previous input fields
    exerciseInfoContainer.innerHTML = "";

    // Create input fields for reps, weight, and sets
    weightInput = document.createElement("input");
    weightInput.setAttribute("type", "text");
    weightInput.setAttribute("id", "weight");
    weightInput.setAttribute("placeholder", "Weight (lbs)");
    repInput = document.createElement("input");
    repInput.setAttribute("type", "number");
    repInput.setAttribute("id", "rep");
    repInput.setAttribute("placeholder", "Reps");
    setInput = document.createElement("input");
    setInput.setAttribute("type", "number");
    setInput.setAttribute("id", "set");
    setInput.setAttribute("placeholder", "Sets");

    // Append input fields to the exercise info container
    exerciseTimer.appendChild(weightInput);
    exerciseTimer.appendChild(repInput);
    exerciseTimer.appendChild(setInput);

    currentExercise = exercise;
  }

  // Event listeners for program buttons
  programButtons.forEach((button) => {
    button.addEventListener("click", function () {
      displayExercises(this.id);
    });
  });
});
