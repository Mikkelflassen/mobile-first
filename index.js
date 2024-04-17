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
const workoutList1InDB = ref(database, "program1/bench-press/weight");
const workoutList2InDB = ref(database, "program1/bench-press/reps");
const workoutList3InDB = ref(database, "program1/bench-press/sets");
const workoutList4InDB = ref(database, "program1/dips/weight");
const workoutList5InDB = ref(database, "program1/dips/reps");
const workoutList6InDB = ref(database, "program1/dips/sets");

function addExerciseToDatabase(inputValue, workoutListInDB) {
  // Remove existing values
  remove(workoutListInDB);

  // Add the new value
  push(workoutListInDB, inputValue);
}

function removeExerciseFromDatabase(exerciseID, workoutListInDB) {
  remove(ref(workoutListInDB, exerciseID));
}

function clearWorkoutListEl(workoutListEl) {
  workoutListEl.innerHTML = "";
}

function appendExerciseToWorkoutListEl(
  exercise,
  workoutListEl,
  workoutListInDB
) {
  const exerciseID = exercise[0];
  const exerciseValue = exercise[1];

  const newExerciseEl = document.createElement("li");
  newExerciseEl.textContent = exerciseValue;
  newExerciseEl.addEventListener("click", function () {
    removeExerciseFromDatabase(exerciseID, workoutListInDB);
  });

  workoutListEl.append(newExerciseEl);
}

function handleAddExercise(
  inputEl,
  addButtonEl,
  workoutListEl,
  workoutListInDB
) {
  addButtonEl.addEventListener("click", function () {
    const inputValue = inputEl.value.trim();
    if (inputValue !== "") {
      addExerciseToDatabase(inputValue, workoutListInDB);
    }
    inputEl.value = "";
  });
}

function handleUpdateWorkoutList(workoutListInDB, workoutListEl) {
  onValue(workoutListInDB, function (snapshot) {
    if (snapshot.exists()) {
      const exercisesArray = Object.entries(snapshot.val());
      clearWorkoutListEl(workoutListEl);
      exercisesArray.forEach((exercise) => {
        appendExerciseToWorkoutListEl(exercise, workoutListEl, workoutListInDB);
      });
    } else {
      workoutListEl.innerHTML = "No exercises here... yet";
    }
  });
}

// Handle weight (bench press)
handleAddExercise(
  document.getElementById("input-weight-1"),
  document.getElementById("add-exercise-button-1"),
  document.getElementById("workout-list-1"),
  workoutList1InDB
);
handleUpdateWorkoutList(
  workoutList1InDB,
  document.getElementById("workout-list-1")
);

// Handle reps
handleAddExercise(
  document.getElementById("input-reps-1"),
  document.getElementById("add-exercise-button-2"),
  document.getElementById("workout-list-2"),
  workoutList2InDB
);
handleUpdateWorkoutList(
  workoutList2InDB,
  document.getElementById("workout-list-2")
);

// Handle sets
handleAddExercise(
  document.getElementById("input-sets-1"),
  document.getElementById("add-exercise-button-3"),
  document.getElementById("workout-list-3"),
  workoutList3InDB
);
handleUpdateWorkoutList(
  workoutList3InDB,
  document.getElementById("workout-list-3")
);

// Handle weight (Dips)
handleAddExercise(
  document.getElementById("input-weight-4"),
  document.getElementById("add-exercise-button-4"),
  document.getElementById("workout-list-4"),
  workoutList4InDB
);

// Handle reps (Dips)
handleAddExercise(
  document.getElementById("input-reps-5"),
  document.getElementById("add-exercise-button-5"),
  document.getElementById("workout-list-5"),
  workoutList5InDB
);

// Handle sets (Dips)
handleAddExercise(
  document.getElementById("input-sets-6"),
  document.getElementById("add-exercise-button-6"),
  document.getElementById("workout-list-6"),
  workoutList6InDB
);
