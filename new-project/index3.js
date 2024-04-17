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
const workoutList7InDB = ref(database, "program1/dumbbellShoulderPress/weight");
const workoutList8InDB = ref(database, "program1/dumbbellShoulderPress/reps");
const workoutList9InDB = ref(database, "program1/dumbbellShoulderPress/sets");
const workoutList10InDB = ref(database, "program2/pullUps/weight");
const workoutList11InDB = ref(database, "program2/pullUps/reps");
const workoutList12InDB = ref(database, "program2/pullUps/sets");

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
function handleAddExerciseGroup(
  inputId,
  addButtonId,
  workoutListId,
  workoutListInDB
) {
  const inputEl = document.getElementById(inputId);
  const addButtonEl = document.getElementById(addButtonId);
  const workoutListEl = document.getElementById(workoutListId);

  handleAddExercise(inputEl, addButtonEl, workoutListEl, workoutListInDB);
  handleUpdateWorkoutList(workoutListInDB, workoutListEl);
}

// Handle Bench Press
handleAddExerciseGroup(
  "input-weight-1",
  "add-exercise-button-1",
  "workout-list-1",
  workoutList1InDB
);
handleAddExerciseGroup(
  "input-reps-2",
  "add-exercise-button-2",
  "workout-list-2",
  workoutList2InDB
);
handleAddExerciseGroup(
  "input-sets-3",
  "add-exercise-button-3",
  "workout-list-3",
  workoutList3InDB
);

// Handle Dips
handleAddExerciseGroup(
  "input-weight-4",
  "add-exercise-button-4",
  "workout-list-4",
  workoutList4InDB
);
handleAddExerciseGroup(
  "input-reps-5",
  "add-exercise-button-5",
  "workout-list-5",
  workoutList5InDB
);
handleAddExerciseGroup(
  "input-sets-6",
  "add-exercise-button-6",
  "workout-list-6",
  workoutList6InDB
);

// Handle Dumbbell Shoulder Press
handleAddExerciseGroup(
  "input-weight-7",
  "add-exercise-button-7",
  "workout-list-7",
  workoutList7InDB
);
handleAddExerciseGroup(
  "input-reps-8",
  "add-exercise-button-8",
  "workout-list-8",
  workoutList8InDB
);
handleAddExerciseGroup(
  "input-sets-9",
  "add-exercise-button-9",
  "workout-list-9",
  workoutList9InDB
);

// Handle Push-Ups
handleAddExerciseGroup(
  "input-weight-10",
  "add-exercise-button-10",
  "workout-list-10",
  workoutList10InDB
);
handleAddExerciseGroup(
  "input-reps-11",
  "add-exercise-button-11",
  "workout-list-11",
  workoutList11InDB
);
handleAddExerciseGroup(
  "input-sets-12",
  "add-exercise-button-12",
  "workout-list-12",
  workoutList12InDB
);
