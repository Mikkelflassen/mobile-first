document.addEventListener("DOMContentLoaded", function () {
  const programs = document.querySelectorAll(".program");
  programs.forEach(function (program) {
    program.addEventListener("click", function () {
      const programName = program.getAttribute("data-program");
      showExercises(programName);
    });
  });

  const exercises = document.querySelectorAll(".exercise");
  exercises.forEach(function (exercise) {
    exercise.addEventListener("click", function () {
      const details = this.querySelector(".exercise-details");
      showExerciseDetails(details);
      toggleExerciseSize(this);
    });
  });
});

function showExercises(program) {
  const exerciseLists = document.querySelectorAll(".exercise-list");
  exerciseLists.forEach(function (list) {
    list.style.display = "none";
  });

  const selectedList = document.getElementById(`${program}-exercises`);
  if (selectedList) {
    selectedList.style.display = "block";
  }
}

function showExerciseDetails(details) {
  const exerciseDetails = document.querySelectorAll(".exercise-details");
  exerciseDetails.forEach(function (detail) {
    detail.style.display = "none";
  });

  details.style.display = "block";
}
function toggleExerciseSize(exercise) {
  const parentContainer = exercise.closest(".exercise-list");
  const exercises = parentContainer.querySelectorAll(".exercise");
  const exerciseDetails = exercise.querySelector(".exercise-details");

  if (exercise.classList.contains("expanded")) {
    // If the exercise is already expanded, check if the click occurred within its details
    if (!exerciseDetails.contains(event.target)) {
      // If the click is outside the exercise details, collapse the exercise
      exercise.classList.remove("expanded");
      exerciseDetails.style.width = ""; // Reset width
    }
  } else {
    // If the exercise is not expanded, expand it
    exercises.forEach(function (ex) {
      if (ex !== exercise) {
        ex.classList.remove("expanded");
        ex.querySelector(".exercise-details").style.width = ""; // Reset width
      }
    });

    exercise.classList.add("expanded");
    exerciseDetails.style.width = "100%"; // Set width to 100% when expanded
  }
}
