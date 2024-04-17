// Function to show exercises for the selected program
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
    });
  });
});

function showExercises(program) {
  // Hide all exercise lists
  const exerciseLists = document.querySelectorAll(".exercise-list");
  exerciseLists.forEach(function (list) {
    list.style.display = "none";
  });

  // Show exercise list for the selected program
  const selectedList = document.getElementById(`${program}-exercises`);
  if (selectedList) {
    selectedList.style.display = "block";
  }
}

function showExerciseDetails(details) {
  // Hide all exercise details
  const exerciseDetails = document.querySelectorAll(".exercise-details");
  exerciseDetails.forEach(function (detail) {
    detail.style.display = "none";
  });

  // Show the clicked exercise details
  details.style.display = "block";
}
