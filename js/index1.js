import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://mobile-first-3a938-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const workoutList2InDB = ref(database, "workoutList2");

const inputExerciseEl = document.getElementById("input-exercise");
const addExerciseButtonEl = document.getElementById("add-exercise-button");
const workoutList2El = document.getElementById("workout-list");

addExerciseButtonEl.addEventListener("click", function () {
  let exerciseValue = inputExerciseEl.value;

  addExerciseToDatabase(exerciseValue);

  clearInputExerciseField();
});

onValue(workoutList2InDB, function (snapshot) {
  if (snapshot.exists()) {
    let exercisesArray = Object.entries(snapshot.val());

    clearWorkoutList2El();

    for (let i = 0; i < exercisesArray.length; i++) {
      let currentExercise = exercisesArray[i];
      let currentExerciseID = currentExercise[0];
      let currentExerciseValue = currentExercise[1];

      appendExerciseToWorkoutList2El(currentExercise);
    }
  } else {
    workoutList2El.innerHTML = "No exercises here... yet";
  }
});

function clearWorkoutList2El() {
  workoutList2El.innerHTML = "";
}

function clearInputExerciseField() {
  inputExerciseEl.value = "";
}

function appendExerciseToWorkoutList2El(exercise) {
  let exerciseID = exercise[0];
  let exerciseValue = exercise[1];

  let newExerciseEl = document.createElement("li");

  newExerciseEl.textContent = exerciseValue;

  newExerciseEl.addEventListener("click", function () {
    let exactLocationOfExerciseInDB = ref(
      database,
      `workoutList2/${exerciseID}`
    );

    remove(exactLocationOfExerciseInDB);
  });

  workoutList2El.append(newExerciseEl);
}

function addExerciseToDatabase(exercise) {
  push(workoutList2InDB, exercise);
}
