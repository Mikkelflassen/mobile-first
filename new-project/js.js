document.addEventListener("DOMContentLoaded", function () {
  const programs = document.querySelectorAll(".program");
  const exerciseContainers = document.querySelectorAll(".exercise-container");

  programs.forEach((program) => {
    program.addEventListener("click", function () {
      const selectedProgram = this.dataset.program;
      exerciseContainers.forEach((container) => {
        if (container.classList.contains(selectedProgram)) {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      });
    });
  });

  // Add event listeners to each exercise to toggle description visibility
  const exercises = document.querySelectorAll(".exercise");
  exercises.forEach((exercise) => {
    exercise.addEventListener("click", function () {
      const description = this.querySelector(".exercise-description");
      description.classList.toggle("show-description");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const exercises = document.querySelectorAll(".exercise");
  const exerciseDescription = document.getElementById("exercise-description");

  exercises.forEach((exercise) => {
    exercise.addEventListener("click", function () {
      const description = this.dataset.description;
      exerciseDescription.textContent = description;
    });
  });
});
